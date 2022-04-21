const uWS = require("uWebSockets.js");
const proto = require("./gen/complied.js");
const jwt = require("jsonwebtoken");
const redis = require("redis");
const Sentry = require("@sentry/node");
const Amplitude = require("@amplitude/node");
const os = require("os");

require("dotenv").config();

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  });
}

const PLATFORM = process.env.SENTRY_ENVIRONMENT || "nodejs";
const DEVICE_ID = `${PLATFORM}-${os.hostname()}`;
console.log(`Amplitude device id: ${DEVICE_ID}`);

const amplitude = Amplitude.init(process.env.AMPLITUDE_API_KEY);

const app = uWS
  .App({})
  .ws("/*", {
    compression: uWS.SHARED_COMPRESSOR,
    message: (ws, message, isBinary) => {
      const clientMsg = proto.WsClientMsg.decode(new Uint8Array(message));

      let authToken = clientMsg.authToken || ws["authToken"];
      if (authToken) {
        jwt.verify(authToken, process.env.SECRET_KEY, (err, decoded) => {
          if (err) {
            ws.end(4401, err.name);
          } else {
            if (!ws["authToken"]) {
              ws["authToken"] = authToken;
              ws.subscribe(decoded["x-pubsub-topic"]);
              console.log(
                `auth done, subscribed to ${decoded["x-pubsub-topic"]}`
              );
            } else {
              const serverMsg = proto.WsServerMsg.create();
              const buffer = proto.WsServerMsg.encode(serverMsg).finish();
              ws.send(buffer, true, true);
            }
          }
        });
      } else {
        ws.end(4401, "NeedAuthToken");
      }
    },
  })
  .listen(9001, (listenSocket) => {
    if (listenSocket) {
      console.log(`Listening on port 9001`);
    }
  });

const subscriber = redis.createClient(process.env.REDIS_URL);

subscriber.on("error", (err) => {
  console.error(err);
});
subscriber.on("connect", () => {
  console.log(`Connected to redis (${process.env.REDIS_TOPIC})`);
});
subscriber.on("message_buffer", (channel, message) => {
  const pubsubMsg = proto.PubsubMsg.decode(message);

  const serverMsg = proto.WsServerMsg.create();
  serverMsg.data = pubsubMsg.data;
  const buffer = proto.WsServerMsg.encode(serverMsg).finish();

  let msgProps;
  if (pubsubMsg.msgPropsJson) {
    msgProps = JSON.parse(pubsubMsg.msgPropsJson);
  }

  if (msgProps) {
    amplitude.logEvent({
      event_type: "msg pubsubRecv",
      time: Date.now(),
      device_id: DEVICE_ID,
      user_id: msgProps["senderId"],
      platform: pubsubMsg.senderPlatform,
      event_properties: {
        ...msgProps,
        timestamp: Date.now(),
      },
    });
  }

  for (const recipientUserId of pubsubMsg.topics) {
    app.publish(recipientUserId, buffer, true, true);

    if (msgProps) {
      amplitude.logEvent({
        event_type: "msg wsSend",
        time: Date.now(),
        device_id: DEVICE_ID,
        user_id: msgProps["senderId"],
        platform: pubsubMsg.senderPlatform,
        event_properties: {
          ...msgProps,
          timestamp: Date.now(),
        },
      });
    }
  }

  console.log(`published ${serverMsg.data.byteLength}B @ ${pubsubMsg.topics}`);

  if (msgProps) {
    amplitude.logEvent({
      event_type: "realtimeMsg wsSend",
      time: Date.now(),
      device_id: DEVICE_ID,
      platform: PLATFORM,
      event_properties: {
        ...msgProps,
        timestamp: Date.now(),
      },
    });
  }
});

subscriber.subscribe(process.env.REDIS_TOPIC);

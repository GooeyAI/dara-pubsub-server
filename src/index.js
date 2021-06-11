const uWS = require("uWebSockets.js");
const proto = require("./gen/complied.js");
const jwt = require("jsonwebtoken");
const redis = require("redis");
const Sentry = require("@sentry/node");

require("dotenv").config();

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN
  });
}

const app = uWS
  .App({})
  .ws("/*", {
    compression: uWS.SHARED_COMPRESSOR,
    open: ws => {
      ws["authDone"] = false;
    },
    message: (ws, message, isBinary) => {
      const clientMsg = proto.WsClientMsg.decode(new Uint8Array(message));
      if (ws["authDone"]) {
        const serverMsg = proto.WsServerMsg.create();
        const buffer = proto.WsServerMsg.encode(serverMsg).finish();
        ws.send(buffer, true, true);
      } else if (clientMsg.authToken) {
        jwt.verify(
          clientMsg.authToken,
          process.env.SECRET_KEY,
          (err, decoded) => {
            if (err) {
              ws.end(4401, err.name);
            } else {
              ws["authDone"] = true;
              ws.subscribe(decoded["x-pubsub-topic"]);
              console.log(
                `auth done, subscribed to ${decoded["x-pubsub-topic"]}`
              );
            }
          }
        );
      } else {
        ws.end(4401, "NeedAuthToken");
      }
    }
  })
  .listen(9001, listenSocket => {
    if (listenSocket) {
      console.log(`Listening on port 9001`);
    }
  });

const subscriber = redis.createClient(process.env.REDIS_URL);

subscriber.on("error", err => {
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

  for (const topic of pubsubMsg.topics) {
    app.publish(topic, buffer, true, true);
  }
  console.log(`published ${serverMsg.data.byteLength}B @ ${pubsubMsg.topics}`);
});

subscriber.subscribe(process.env.REDIS_TOPIC);

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.WsClientMsg = (function() {

    /**
     * Properties of a WsClientMsg.
     * @exports IWsClientMsg
     * @interface IWsClientMsg
     * @property {string|null} [authToken] WsClientMsg authToken
     */

    /**
     * Constructs a new WsClientMsg.
     * @exports WsClientMsg
     * @classdesc Represents a WsClientMsg.
     * @implements IWsClientMsg
     * @constructor
     * @param {IWsClientMsg=} [properties] Properties to set
     */
    function WsClientMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WsClientMsg authToken.
     * @member {string} authToken
     * @memberof WsClientMsg
     * @instance
     */
    WsClientMsg.prototype.authToken = "";

    /**
     * Creates a new WsClientMsg instance using the specified properties.
     * @function create
     * @memberof WsClientMsg
     * @static
     * @param {IWsClientMsg=} [properties] Properties to set
     * @returns {WsClientMsg} WsClientMsg instance
     */
    WsClientMsg.create = function create(properties) {
        return new WsClientMsg(properties);
    };

    /**
     * Encodes the specified WsClientMsg message. Does not implicitly {@link WsClientMsg.verify|verify} messages.
     * @function encode
     * @memberof WsClientMsg
     * @static
     * @param {IWsClientMsg} message WsClientMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WsClientMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.authToken != null && Object.hasOwnProperty.call(message, "authToken"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.authToken);
        return writer;
    };

    /**
     * Encodes the specified WsClientMsg message, length delimited. Does not implicitly {@link WsClientMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WsClientMsg
     * @static
     * @param {IWsClientMsg} message WsClientMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WsClientMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WsClientMsg message from the specified reader or buffer.
     * @function decode
     * @memberof WsClientMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WsClientMsg} WsClientMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WsClientMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WsClientMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.authToken = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WsClientMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WsClientMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WsClientMsg} WsClientMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WsClientMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WsClientMsg message.
     * @function verify
     * @memberof WsClientMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WsClientMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.authToken != null && message.hasOwnProperty("authToken"))
            if (!$util.isString(message.authToken))
                return "authToken: string expected";
        return null;
    };

    /**
     * Creates a WsClientMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WsClientMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WsClientMsg} WsClientMsg
     */
    WsClientMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.WsClientMsg)
            return object;
        var message = new $root.WsClientMsg();
        if (object.authToken != null)
            message.authToken = String(object.authToken);
        return message;
    };

    /**
     * Creates a plain object from a WsClientMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WsClientMsg
     * @static
     * @param {WsClientMsg} message WsClientMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WsClientMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.authToken = "";
        if (message.authToken != null && message.hasOwnProperty("authToken"))
            object.authToken = message.authToken;
        return object;
    };

    /**
     * Converts this WsClientMsg to JSON.
     * @function toJSON
     * @memberof WsClientMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WsClientMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WsClientMsg;
})();

$root.WsServerMsg = (function() {

    /**
     * Properties of a WsServerMsg.
     * @exports IWsServerMsg
     * @interface IWsServerMsg
     * @property {Uint8Array|null} [data] WsServerMsg data
     */

    /**
     * Constructs a new WsServerMsg.
     * @exports WsServerMsg
     * @classdesc Represents a WsServerMsg.
     * @implements IWsServerMsg
     * @constructor
     * @param {IWsServerMsg=} [properties] Properties to set
     */
    function WsServerMsg(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WsServerMsg data.
     * @member {Uint8Array} data
     * @memberof WsServerMsg
     * @instance
     */
    WsServerMsg.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new WsServerMsg instance using the specified properties.
     * @function create
     * @memberof WsServerMsg
     * @static
     * @param {IWsServerMsg=} [properties] Properties to set
     * @returns {WsServerMsg} WsServerMsg instance
     */
    WsServerMsg.create = function create(properties) {
        return new WsServerMsg(properties);
    };

    /**
     * Encodes the specified WsServerMsg message. Does not implicitly {@link WsServerMsg.verify|verify} messages.
     * @function encode
     * @memberof WsServerMsg
     * @static
     * @param {IWsServerMsg} message WsServerMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WsServerMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified WsServerMsg message, length delimited. Does not implicitly {@link WsServerMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WsServerMsg
     * @static
     * @param {IWsServerMsg} message WsServerMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WsServerMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WsServerMsg message from the specified reader or buffer.
     * @function decode
     * @memberof WsServerMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WsServerMsg} WsServerMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WsServerMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WsServerMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WsServerMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WsServerMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WsServerMsg} WsServerMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WsServerMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WsServerMsg message.
     * @function verify
     * @memberof WsServerMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WsServerMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a WsServerMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WsServerMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WsServerMsg} WsServerMsg
     */
    WsServerMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.WsServerMsg)
            return object;
        var message = new $root.WsServerMsg();
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a WsServerMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WsServerMsg
     * @static
     * @param {WsServerMsg} message WsServerMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WsServerMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this WsServerMsg to JSON.
     * @function toJSON
     * @memberof WsServerMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WsServerMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return WsServerMsg;
})();

$root.PubsubMsg = (function() {

    /**
     * Properties of a PubsubMsg.
     * @exports IPubsubMsg
     * @interface IPubsubMsg
     * @property {Array.<string>|null} [topics] PubsubMsg topics
     * @property {Uint8Array|null} [data] PubsubMsg data
     * @property {string|null} [msgPropsJson] PubsubMsg msgPropsJson
     */

    /**
     * Constructs a new PubsubMsg.
     * @exports PubsubMsg
     * @classdesc Represents a PubsubMsg.
     * @implements IPubsubMsg
     * @constructor
     * @param {IPubsubMsg=} [properties] Properties to set
     */
    function PubsubMsg(properties) {
        this.topics = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PubsubMsg topics.
     * @member {Array.<string>} topics
     * @memberof PubsubMsg
     * @instance
     */
    PubsubMsg.prototype.topics = $util.emptyArray;

    /**
     * PubsubMsg data.
     * @member {Uint8Array} data
     * @memberof PubsubMsg
     * @instance
     */
    PubsubMsg.prototype.data = $util.newBuffer([]);

    /**
     * PubsubMsg msgPropsJson.
     * @member {string|null|undefined} msgPropsJson
     * @memberof PubsubMsg
     * @instance
     */
    PubsubMsg.prototype.msgPropsJson = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * PubsubMsg _MsgPropsJsonOneof.
     * @member {"msgPropsJson"|undefined} _MsgPropsJsonOneof
     * @memberof PubsubMsg
     * @instance
     */
    Object.defineProperty(PubsubMsg.prototype, "_MsgPropsJsonOneof", {
        get: $util.oneOfGetter($oneOfFields = ["msgPropsJson"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new PubsubMsg instance using the specified properties.
     * @function create
     * @memberof PubsubMsg
     * @static
     * @param {IPubsubMsg=} [properties] Properties to set
     * @returns {PubsubMsg} PubsubMsg instance
     */
    PubsubMsg.create = function create(properties) {
        return new PubsubMsg(properties);
    };

    /**
     * Encodes the specified PubsubMsg message. Does not implicitly {@link PubsubMsg.verify|verify} messages.
     * @function encode
     * @memberof PubsubMsg
     * @static
     * @param {IPubsubMsg} message PubsubMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PubsubMsg.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.topics != null && message.topics.length)
            for (var i = 0; i < message.topics.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.topics[i]);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        if (message.msgPropsJson != null && Object.hasOwnProperty.call(message, "msgPropsJson"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.msgPropsJson);
        return writer;
    };

    /**
     * Encodes the specified PubsubMsg message, length delimited. Does not implicitly {@link PubsubMsg.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PubsubMsg
     * @static
     * @param {IPubsubMsg} message PubsubMsg message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PubsubMsg.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PubsubMsg message from the specified reader or buffer.
     * @function decode
     * @memberof PubsubMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PubsubMsg} PubsubMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PubsubMsg.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PubsubMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.topics && message.topics.length))
                    message.topics = [];
                message.topics.push(reader.string());
                break;
            case 2:
                message.data = reader.bytes();
                break;
            case 3:
                message.msgPropsJson = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PubsubMsg message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PubsubMsg
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PubsubMsg} PubsubMsg
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PubsubMsg.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PubsubMsg message.
     * @function verify
     * @memberof PubsubMsg
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PubsubMsg.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.topics != null && message.hasOwnProperty("topics")) {
            if (!Array.isArray(message.topics))
                return "topics: array expected";
            for (var i = 0; i < message.topics.length; ++i)
                if (!$util.isString(message.topics[i]))
                    return "topics: string[] expected";
        }
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        if (message.msgPropsJson != null && message.hasOwnProperty("msgPropsJson")) {
            properties._MsgPropsJsonOneof = 1;
            if (!$util.isString(message.msgPropsJson))
                return "msgPropsJson: string expected";
        }
        return null;
    };

    /**
     * Creates a PubsubMsg message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PubsubMsg
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PubsubMsg} PubsubMsg
     */
    PubsubMsg.fromObject = function fromObject(object) {
        if (object instanceof $root.PubsubMsg)
            return object;
        var message = new $root.PubsubMsg();
        if (object.topics) {
            if (!Array.isArray(object.topics))
                throw TypeError(".PubsubMsg.topics: array expected");
            message.topics = [];
            for (var i = 0; i < object.topics.length; ++i)
                message.topics[i] = String(object.topics[i]);
        }
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        if (object.msgPropsJson != null)
            message.msgPropsJson = String(object.msgPropsJson);
        return message;
    };

    /**
     * Creates a plain object from a PubsubMsg message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PubsubMsg
     * @static
     * @param {PubsubMsg} message PubsubMsg
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PubsubMsg.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.topics = [];
        if (options.defaults)
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        if (message.topics && message.topics.length) {
            object.topics = [];
            for (var j = 0; j < message.topics.length; ++j)
                object.topics[j] = message.topics[j];
        }
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        if (message.msgPropsJson != null && message.hasOwnProperty("msgPropsJson")) {
            object.msgPropsJson = message.msgPropsJson;
            if (options.oneofs)
                object._MsgPropsJsonOneof = "msgPropsJson";
        }
        return object;
    };

    /**
     * Converts this PubsubMsg to JSON.
     * @function toJSON
     * @memberof PubsubMsg
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PubsubMsg.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PubsubMsg;
})();

module.exports = $root;

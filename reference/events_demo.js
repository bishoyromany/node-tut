const EventEmitter = require("events");
const Logger = require("./../logger");
const logger = new Logger();

logger.on("message", (data) => {
  console.log(data);
});

logger.log("Hello World");

class MyEmitter extends EventEmitter {}

const MyEmitter1 = new MyEmitter();

// listener
MyEmitter1.on("event", () => {
  console.log("Event Fired");
});

const options = {};

module.exports = options;

const { EventEmitter } = require("events");

const eventHandler = new EventEmitter();

eventHandler.on("saySomething", (name) => {
  console.log(`I can hear you, ${name}!`);
});

eventHandler.emit("saySomething", "Vitor");
eventHandler.emit("saySomething", "Daniel");
eventHandler.emit("saySomething", "Heimer");

eventHandler.once("didYouHearMe", () => {
  console.log("I heard you!");
});

eventHandler.emit("didYouHearMe");
eventHandler.emit("didYouHearMe");
eventHandler.emit("didYouHearMe");

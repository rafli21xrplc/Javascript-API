import { EventEmitter } from "../index.js";

const birthDay = (name) => {
  console.log(`happy Birth Day ${name}!`);
};

const templates = ({ name }) => {
  birthDay(name);
};

const myEvent = new EventEmitter();

myEvent.on("congratulation", templates);
myEvent.emit("congratulation", { name: "Dimas" });

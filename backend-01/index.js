// import { log } from "node:console";
// import { Server } from "node:http";
// import { env, memoryUsage } from "node:process";
// import { argv } from "node:process";
// import { firstName, lastName } from "./app.js";
// import { tiger } from "./Tiger.js";
// import { wolf } from "./Wolf.js";
// import moment from "moment/moment.js";
// import { EventEmitter } from "events";
// import { fileSystem } from "fs";
// import { Env } from "node:process";
const fs = require("fs");
// const initialMemoryUsage = memoryUsage().heapUsed;
// const yourName = argv[2];
// const environment = process.env.NODE_ENV;

// for (let i = 0; i <= 10000; i++) {
//   // Proses looping ini akan membuat penggunaan memori naik
// }

// const currentMemoryUsage = memoryUsage().heapUsed;

// console.log(`Hai, ${yourName}`);
// console.log(`Mode environment: ${environment}`);
// console.log(
//   `Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
// );

// const fight = (Tiger, Wolf) => {
//   if (Tiger.strength > Wolf.strength) {
//     Tiger.growl();
//     return;
//   }

//   if (Tiger.strength < Wolf.strength) {
//     Tiger.growl();
//     return;
//   }

//   console.log("Tiger anda Wolf same strenght");
// };

// const tiger = new Tiger();
// const wolf = new Wolf();

// fight(tiger, wolf);
// console.log(`${firstName} ${lastName}`);

// const date = moment().format("MM do YY");
// console.log(date);

// const myEventEmitter = new EventEmitter();

// const makeCoffe = (nameCoffe, nameOrder) => {
//   console.log(`${nameOrder} order coffe ${nameCoffe} success created`);
// };

// const payCoffee = (money) => {
//   console.log(`your price Coffee ${money}`);
// };

// myEventEmitter.on("Coffee-Order", makeCoffe);
// myEventEmitter.on("Coffee-Order", payCoffee);
// myEventEmitter.emit("Coffee-Order", {
//   nameCoffe: "tubruk",
//   nameOrder: "Rafliansyah",
//   money: 90000
// });

// const templateOrderCoffee = ({ nameCoffe, nameOrder, money }) => {
//   makeCoffe(nameCoffe, nameOrder);
//   payCoffee(money);
// };

// myEventEmitter.on("orderCoffee", templateOrderCoffee);
// myEventEmitter.emit("orderCoffee", {
//   nameCoffe: "mocca",
//   nameOrder: "Rafli",
//   money: 90000,
// });

// export { EventEmitter };

const fileCallback = (error, datas) => {
  if (error) {
    console.log("gagal membaca berkas");
  }
  console.log(datas);
};

fs.readFile("todo.txt", "UTF-8", fileCallback);

// const data = fs.readFileSync("todo.txt", "UTF-8");
// console.log(data);
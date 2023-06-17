const fs = require("fs");

// const result = fs.readFileSync("todo.txt", "utf-8");
// console.log(result);

const fileSystem = (error, datas) => {
  if (error) {
    console.log("files cannot read");
  }
  console.log(datas);
};

console.log(fileSystem);

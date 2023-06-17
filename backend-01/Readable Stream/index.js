const fs = require("fs");

// const redebleStream = fs.createReadStream("./article.txt", { highWaterMark: 10 });

// redebleStream.on("readable", () => {
//   try {
//     process.stdout.write(`${redebleStream.read()}`)
//   } catch (error) {}
// });

// redebleStream.on("end", () => {
//   console.log("DONE");
// });
const writeBle = fs.createWriteStream("output.txt");
writeBle.write(
  "halooo, nama saya mochamad surya rafliansyah bisa dipanggil Rafli atau RJ atau Surya. Jangan tanya singkatan RJ, soalnya itu hukum alam yang membuat itu\n"
);
writeBle.write("hehehe semangat yahhh");
writeBle.end("\nmakasih");

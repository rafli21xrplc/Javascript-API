import http from "http";

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  const { method, url } = request;

  if (method === "POST") {
    let body = [];
    response.on("data", (chunk) => {
      body.push(chunk);
    });

    response.on("end", () => {
      body = Buffer.concat(body).toString();
      response.end(body);
    });
  } else if (method === "GET") {
    response.end("GET");
  }

  //   if (url === "/") {
  //     if (method === "GET") {
  //       response.end("<h1>Ini adalah homepage</h1>");
  //     } else {
  //       response.end(
  //         `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
  //       );
  //     }
  //   } else if (url === "/about") {
  //     if (method === "GET") {
  //       response.end("<h1>Halo! Ini adalah halaman about</h1>");
  //     } else if (method === "POST") {
  //       let body = [];

  //       request.on("data", (chunk) => {
  //         body.push(chunk);
  //       });

  //       request.on("end", () => {
  //         body = Buffer.concat(body).toString();
  //         const { name } = JSON.parse(body);
  //         response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
  //       });
  //     } else {
  //       response.end(
  //         `<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`
  //       );
  //     }
  //   } else {
  //     response.end("<h1>Halaman tidak ditemukan!</h1>");
  //   }
};

const server = http.createServer(requestListener);

const port = 8000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});

import http, { request } from "http";

const requestListener = (request, response) => {
  response.setHeader("Content-Type: application/json");
  response.statusCode = 200;

  const { method, url } = request;
  let body = [];
  if (method === "POST") {
    let body = [];

    request.on("data", (chunk) => {
      body.push(chunk);
    });

    request.on("end", () => {
      body = Buffer.concat(body).toString();
      const { name } = JSON.parse(body);
      response.end(`<h1>Hai, ${name}!</h1>`);
    });
  }
};

const host = "localhost";
const port = 8000;
const server = http.createServer(requestListener);
server.listen(port, host, function () {
  console.log(`Berjalan di http://${host}:${port}`);
});

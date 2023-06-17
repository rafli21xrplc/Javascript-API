import http from "http";

const serverListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;
  response.end("<h1>Hello world</h1>");
};

const server = http.createServer(serverListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Sedang berjalan.... https://${host}:${port}`);
});

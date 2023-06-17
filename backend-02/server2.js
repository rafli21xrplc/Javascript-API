import http from "http";

const requestListener = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;

  const { method, url } = req;

  if (url === "/") {
    if (method === "GET") {
      res.end("<h1>HomePage</h1>");
    } else {
      res.end("<h1>not found</h1>");
    }
  } else if (url === "/about") {
    if (method === "GET") {
      res.end("<h1>AboutPage</h1>");
    } else if (method === "POST") {
      let body = [];

      req.on("data", (chunk) => {
        body.push(chunk);
      });

      req.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        res.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
      });
    }
  } else {
    res.end("not found");
  }
};

const server = http.createServer(requestListener);

const port = 8000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});

import http from "http";

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.setHeader("X-Create-By", "NODE JS");

  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "Homepage",
        })
      );
    } else {
      response.statusCode = 404;
      response.end(
        JSON.stringify({
          message: "Not Found",
        })
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "About Page",
        })
      );
    } else if (method === "POST") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "About Page POST",
        })
      );
      // response.end("<h1>POST method</h1>");
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        // const { name } = JSON.parse(body);
        response.end(body);
      });
    } else {
      response.statusCode = 404;
      response.end(
        JSON.stringify({
          message: "About Page POST",
        })
      );
    }
  } else {
    response.end("<h1>not found</h1>");
  }

  // if (method === "DELETE") {
  //   response.end("<h1>DELETE method</h1>");
  // }

  // if (method === "PUT") {
  //   response.end("<h1>PUT method</h1>");
  // }
};

const server = http.createServer(requestListener);
const host = "localhost";
const port = 5000;

server.listen(port, host, () => {
  console.log(`Berjalan.... http://${host}:${port}`);
});

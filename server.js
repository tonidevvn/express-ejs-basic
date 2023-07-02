const http = require("http");

const server = http.createServer((req, res) => {
  console.log("runing request ...");
  res.setHeader("Content-Type", "text/html");
  res.write("Hello 500 AE");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Node jS server is running on port 3000");
});

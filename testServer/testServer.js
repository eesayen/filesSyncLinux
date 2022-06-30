const http = require("http");

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.end("success");
  }, 2000);
});

server.listen(3000, (...agrs) => {
  console.log(...agrs);
  console.log("server run at port 3000");
});

const http = require("http");

http
  .createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end("Hello");
  })
  .listen(2200);

http
  .createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end("JSON.stringify(result)");
  })
  .listen(2000);

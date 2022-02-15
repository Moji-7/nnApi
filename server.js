const http = require("http");

http
  .createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end("Hello");
  })
  .listen(2200);

// comment
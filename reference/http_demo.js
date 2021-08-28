const http = require("http");

const options = {};

// create server
http
  .createServer((req, res) => {
    res.write("Hello World");
    res.end();
  })
  .listen(8000, () => {
    console.log("Server Running...");
  });

module.exports = options;

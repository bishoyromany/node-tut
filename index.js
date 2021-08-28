const http = require("http");
const urlHandler = require("./router/urlHandler");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  return urlHandler(req, res);
});

server.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}...`);
});

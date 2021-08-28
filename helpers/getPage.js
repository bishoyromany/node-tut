const fs = require("fs");
const path = require("path");

const htmlHeader = (res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
};

const jsonHeader = (res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
};

const cssHeader = (res) => {
  res.writeHead(200, { "Content-Type": "text/css" });
};

const jsHeader = (res) => {
  res.writeHead(200, { "Content-Type": "application/javascript" });
};

const headers = (res, ext) => {
  if (ext === "json") {
    jsonHeader(res);
  } else if (ext === "html") {
    htmlHeader(res);
  } else if (ext === "css") {
    cssHeader(res);
  } else if (ext === "js") {
    jsHeader(res);
  }
};

const getPage = (filename, res) => {
  let ext = path.extname(filename);
  if (!ext) {
    filename += ".html";
  }
  ext = path.extname(filename);

  if (ext === ".html") {
    filename = "pages/" + filename;
  }

  const fileDir = path.join(__dirname, "..", "public", filename);

  fs.readFile(path.join(fileDir), (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end();
      return;
    }
    headers(res, ext);
    res.end(data);
  });
};

module.exports = getPage;

const getPage = require("./../helpers/getPage");

const htmlHeader = (res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
};

const urlHandler = (req, res) => {
  let page = null;
  if (req.url === "/") {
    page = getPage("index.html");
  } else if (req.url === "/about") {
    page = getPage("about.html");
  }
  if (!page) {
    res.writeHead(404);
  } else {
    htmlHeader(res);
  }
  res.end(page);
};

module.exports = urlHandler;

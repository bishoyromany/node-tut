const getPage = require("./../helpers/getPage");

const urlHandler = (req, res) => {
  getPage(req.url === "/" ? "index.html" : req.url, res);
};

module.exports = urlHandler;

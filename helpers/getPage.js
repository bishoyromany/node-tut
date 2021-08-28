const fs = require("fs");
const path = require("path");

const getPage = (filename) => {
  return fs.readFileSync(
    path.join(__dirname, "..", "public", "pages", filename)
  );
};

module.exports = getPage;

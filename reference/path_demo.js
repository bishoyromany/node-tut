const path = require("path");

const options = {
  basename: path.basename(__filename),
  dirname: path.dirname(__filename),
  extname: path.extname(__filename),
  parse: path.parse(__filename).name,
  format: path.format(path.parse(__filename)),
  join: path.join(__dirname, "test", "hello.html"),
  delimiter: path.delimiter,
  isAbsolute: path.isAbsolute(__dirname),
  normalize: path.normalize("/foo/bar//baz/asdf/quux/.."),
  resolve: path.resolve("test", "app"),
  sep: path.sep,
};

module.exports = options;

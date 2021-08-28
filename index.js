const express = require("express");
require("dotenv/config");
const constants = require("./constants");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middlewares/logger");
const PORT = process.env.PORT || 8000;

app.use(logger);

// body parse and url
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// serve static content
app.use(express.static(path.join(__dirname, "public")));
// engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// members api routes
app.use(
  `/api/${constants.API_VERSION}/members`,
  require("./routes/api/members")
);
// members pages
app.use(`/members`, require("./routes/web/members"));

app.listen(PORT);

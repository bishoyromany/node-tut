const express = require("express");
const app = express();
require("dotenv/config");
const path = require("path");
const logger = require("./middlewares/logger");
const API_VERSION = process.env.API_VERSION || "v0.1";
const PORT = process.env.PORT || 8000;

app.use(logger);

// body parse and url
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// serve static content
app.use(express.static(path.join(__dirname, "public")));

// members api routes
app.use(`/api/${API_VERSION}/members`, require("./routes/api/members"));

app.listen(PORT);

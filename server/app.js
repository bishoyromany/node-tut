const express = require("express");
require("dotenv/config");
const PORT = process.env.PORT || 5000;
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const mongodbCode = process.env.MONGO_DB_CONNECTION_STRING;
const app = express();

mongoose.connect(mongodbCode);

mongoose.connection.once("open", () => console.log("Connected To MongoDB"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Server Listening To Port ${PORT}`));

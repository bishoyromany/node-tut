const express = require("express");
require("dotenv/config");
const PORT = process.env.PORT || 5000;
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Server Listening To Port ${PORT}`));

const express = require("express");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

const { ApolloServer, gql } = require("apollo-server-express");
const db = require("./db");
const app = express();

const { typeDefs, resolvers } = require("./schema");
const models = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { models };
  },
});

db.connect(process.env.MONGODB_URL);

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.get("/", (req, res) => res.send("Hello World"));

  app.listen({ port: PORT }, () =>
    console.log(`Server running at http://localhost:${PORT}`)
  );
}

startApolloServer();

const express = require("express");
const PORT = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { ApolloServer, gql } = require("apollo-server-express");
const db = require("./db");
const app = express();

const { typeDefs, resolvers } = require("./schema");
const models = require("./models");

// get the user info from a JWT
const getUser = (req) => {
  if (req.headers["authorization"]) {
    try {
      return jwt.verify(
        req.headers["authorization"].split(" ")[1],
        process.env.JWT_SECRET
      );
    } catch (e) {
      return null;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    // try to retrieve a user with the token
    let user = getUser(req);
    // for now, let's log the user to the console:
    if (user && user._id) {
      user = await models.User.findById(user._id);
    }
    return { models, user };
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

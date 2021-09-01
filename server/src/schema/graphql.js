const { importSchema } = require("graphql-import");
const { gql } = require("apollo-server-express");
const userResolvers = require("./user/resolvers");
const schema = importSchema("**/*.gql");

const typeDefs = gql`
  ${schema}
`;

const resolvers = {
  Query: {
    ...userResolvers,
  },
};

module.exports = {
  typeDefs,
  resolvers,
};

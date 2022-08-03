const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    name: String!
    age: Int!
  }

  # Queries
  type Query {
    getAllUsers: [User!]!
  }

  # Mutations
  type Mutation {
    createUser(name: String!, age: Int!): User!
  }
`;

module.exports = {
  typeDefs,
};

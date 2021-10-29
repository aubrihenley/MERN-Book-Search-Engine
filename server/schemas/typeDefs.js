const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookID: ID!
    authors: [String]!
    description: String
    title: String
    image: String
    link: String
  }

  input BookInput {
    bookID: ID!
    authors: [String]!
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(content: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;

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

  input Book {
    bookID: Int
    authors: [String]!
    description: String
    title: String
    media: [MediaDetails!]
    link: String
  }

  input MediaDetails {
    format: MediaFormat!
    url: String!
  }

  enum MediaFormat {
    IMAGE
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(content: Book!): User
    removeBook(bookId: Int): User
  }
`;

module.exports = typeDefs;

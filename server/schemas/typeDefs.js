const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    username: String
    savedBooks: [Book]
    bookCount: Int
    
  }
  type Book {
    bookId: String
    title: String
    authors: String
    description: String
    link: String
    image: String
    
  }
  type Auth {
    token: ID
    user: User
  }
`;
// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs ("type User is how we customly name the query for what we are looking for in the database, and 'String' or 'Int' is the datatype that will be returned")
const typeDefs = gql`
  type Cat {
    id: ID!
    name: String!
    breed: String!
    sex: String!
    age: Int!
    city: String!
    image: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  
  type Dog {
    id: ID!
    name: String!
    breed: String!
    sex: String!
    age: Int!
    city: String!
    image: String!
  }
  type Query {
    Users: [User]
    getDogs: [Dog]
    getCats: [Cat]
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createCat(
      name: String!
      breed: String!
      sex: String!
      age: String!
      city: String!
      image: String!
    ): Cat!
    deleteCat(catID: ID!): String!
    createDog(
      name: String!
      breed: String!
      sex: String!
      age: String!
      city: String!
      image: String!
    ): Dog!
    deleteDog(dogID: ID!): String!
  }
`;


module.exports = typeDefs;

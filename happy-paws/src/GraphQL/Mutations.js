// import { gql } from "@apollo/client";
import gql from "graphql-tag";

export const ADD_CAT = gql`
  mutation createCat(
    $catID: ID!
    $name: String!
    $breed: String!
    $sex: String!
    $age: Int!
    $city: String!
    $image: String!
  ) {
    createCat(
      ID: $ID
      name: $name
      breed: $breed
      sex: $sex
      age: $age
      city: $city
      image: $image
    )
  }
`;

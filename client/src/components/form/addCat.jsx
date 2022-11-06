import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";


const GET_CATS = gql`
  query GetCats {
    getCats {
      id
      name
      breed
      sex
      age
      city
      image
    }
  }
`;

const ADD_CAT = gql`
  mutation createCat(
    $name: String!
    $breed: String!
    $sex: String!
    $age: String!
    $city: String!
    $image: String!
  ) {
    createCat(
      name: $name
      breed: $breed
      sex: $sex
      age: $age
      city: $city
      image: $image
    ) {
      name
      breed
      sex
      age
      city
      image
    }
  }
`;

function AddCat() {
  let name, breed, age, sex, city, image;
  const { loading, error, refetch } = useQuery(GET_CATS);
  const [createCat] = useMutation(ADD_CAT);

  return (
    <div>
      <form
        onSubmit={(e) => {
          // e.preventDefault();
          createCat({
            variables: {
              name: name.value,
              breed: breed.value,
              age: age.value,
              sex: sex.value,
              city: city.value,
              image: image.value,
            },
          });

          refetch();
        }}
      >
        <input ref={(value) => (name = value)} id="name" className="text-black" placeholder="Add Cat Name"></input>
        <br></br>
        <br></br>
        <input ref={(value) => (breed = value)} id="breed" className="text-black" placeholder="What breed of cat is this?"></input>
        <br></br>
        <br></br>
        <input ref={(value) => (age = value)} id="age" className="text-black" placeholder="How old is this cat?"></input>
        <br></br>
        <br></br>
        <input ref={(value) => (sex = value)} id="sex" className="text-black" placeholder="Cat Gender"></input>
        <br></br>
        <br></br>
        <input ref={(value) => (city = value)} id="city" className="text-black" placeholder="Where was it found?"></input>
        <br></br>
        <br></br>
        <input ref={(value) => (image = value)} id="image" className="text-black" placeholder="Add URL link of picture"></input>
        <br></br>
        

        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}


export default AddCat;

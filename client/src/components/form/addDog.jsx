import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";


const GET_DOGS = gql`
  query GetDogs {
    getDogs {
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

const ADD_DOG = gql`
  mutation createDog(
    $name: String!
    $breed: String!
    $sex: String!
    $age: String!
    $city: String!
    $image: String!
  ) {
    createDog(
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



function AddDog() {
  let name, breed, age, sex, city, image;
  const { loading, error, refetch } = useQuery(GET_DOGS)
  const [createDog] = useMutation(ADD_DOG);

  return (
    <div>
      <form
        onSubmit={(e) => {
          // e.preventDefault();
          createDog({
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
        <input ref={(value) => (name = value)} id="name" className="text-black" placeholder="Add Dog Name"></input>
        <br></br>
        <br></br>
        <input ref={(value) => (breed = value)} id="breed" className="text-black" placeholder="What breed of dog is this?"></input>
        <br></br>
        <br></br>
        <input ref={(value) => (age = value)} id="age" className="text-black" placeholder="How old is this dog?"></input>
        <br></br>
        <br></br>
        <input ref={(value) => (sex = value)} id="sex" className="text-black" placeholder="Dog Gender"></input>
        <br></br>
        <br></br>
        <input ref={(value) => (city = value)} id="city" className="text-black" placeholder="Where was it found?"></input>
        <br></br>
        <br></br>
        <input ref={(value) => (image = value)} id="image" className="text-black" placeholder="Add URL link of picture"></input>
        <br></br>
        

        <button type="submit">Add Dog</button>
      </form>
    </div>
  );
}


export default AddDog;
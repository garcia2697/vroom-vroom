import React from "react";


import { useQuery, gql } from "@apollo/client";


// searches up the cat database
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


// function places each cat in a card, styling will have to be done here
function Cats() {
  const { loading, error, data } = useQuery(GET_CATS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.getCats.map(({ id, name, breed, sex, age, city, image }) => (
    
    <div className="max-w-sm p-4 rounded overflow-hidden shadow-lg bg-white">
    <img
      className="w-fill object-cover h-96"
      class="sm:h-96 md:h-96 lg:h-96"
      src={image}
      alt=""
      id="gatto-img"
    />
    <div className="px-6 py-4">
    <h3 className="text-gray-700 text-base">Name: {name}</h3>
      <h3 className="text-gray-700 text-base">Breed: {breed}</h3>
      <h3 className="text-gray-700 text-base">Sex: {sex}</h3>
      <h3 className="text-gray-700 text-base">Age: {age}</h3>
      <h3 className="text-gray-700 text-base">Location: {city}</h3>
    </div>
  </div>
    
  ));
}

export default function Cat() {
  return (
    <div>
      <h2>
      
      </h2>
      <br />
      <article className="cats-item flex grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      
      <Cats></Cats>
      
    </article>
      
    </div>
  );
}

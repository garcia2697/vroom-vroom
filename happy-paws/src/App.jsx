import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/Nav/Nav";
// import Cats from './components/Cats'
import Login from './components/login/Login';
// import Signup from './components/login/server'
import Cats from "./components/gatos/gatos";
import Dogs from "./components/perros/perros";
import Gallery from "./components/Gallery";
import AddCat from "./components/form/addCat";
import AddDog from "./components/form/addDog";


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});


const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3001/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


const App = () => {
  const [pages] = useState([
    {name: 'Log in', description:<Login></Login>},
    // {name: 'Signup', description:<Signup></Signup>},
    { name: "Home", description: <Header></Header> },
    { name: "Dog", description: <Dogs></Dogs> },
    { name: "Cats", description: <Cats></Cats> },
    { name: "", description: <AddCat></AddCat> },
    { name: "", description: <AddDog></AddDog> },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  


  return (

    <ApolloProvider client={client}>
      <div>
        {/* <Header/> */}
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          
        ></Nav>

        <main>

          <button id="form"
            onClick={() => {
              setCurrentPage(pages[4]);
            }}
          >
            {" "}
            Lost Cat?{" "}
          </button>

          <button id="form"
            onClick={() => {
              setCurrentPage(pages[5]);
            }}
          >
            {" "}
            Lost Dog?{" "}
          </button>


          <>
            <Gallery currentPage={currentPage}></Gallery>
          </>
        </main>
        {/* <Nav/> */}
      </div>

      {/* <Login/> */}
    
    </ApolloProvider>
  ) 
};



export default App;

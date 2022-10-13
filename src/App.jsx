import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/Nav/Nav";
// import Cats from './components/Cats'
// import LoginForm from "./client/components/login/client/src/LoginForm";
// // // import SignupForm from "./client/components/login/client/src/SignupForm";
import Cats from "./components/gatos/gatos";
import Dogs from "./components/perros/Perros";
import Gallery from "./components/Gallery";
import axios from "./components/login/api/axios";
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import {onError} from '@apollo/client/link/error'


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});


const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3000/graphql" }),
]);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const App = () => {
  const [pages] = useState([

    // {name: 'Log in', description:<LoginForm></LoginForm>},
    // {name: 'Signup', description:<SignupForm></SignupForm>},
    { name: "Back to the top", description: <Header></Header> },
    { name: "FaDog", description: <Dogs></Dogs> },
    { name: "Cats", description: <Cats></Cats> },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  
  const getDogData = () => {
    axios.get('/api/dogs')
    .then(() => {
      console.log('Dog data has been received!');
    })
    .catch(() => {
      alert('Error retreiving dog data!')
    });
  };

  const getCatData = () => {
    axios.get('/api/cats')
    .then(() => {
      console.log('Cat data has been received!');
    })
    .catch(() => {
      alert('Error retreiving cat data!')
    });
  }


  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Route path='/dogs' element={<Dogs/>}/>
        </Router>
      </ApolloProvider>
    </>
  );
};

export default App;
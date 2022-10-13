import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/Nav/Nav";
// import Cats from './components/Cats'
import Login from './components/login/Login';
// import Signup from './components/login/server'
import Cats from "./components/gatos/gatos";
import Dogs from "./components/perros/perros";
import Gallery from "./components/Gallery";
import axios from "./components/login/api/axios";
import Form from "./components/form/form";

const App = () => {
  const [pages] = useState([
    {name: 'Log in', description:<Login></Login>},
    // {name: 'Signup', description:<Signup></Signup>},
    { name: "Back to the top", description: <Header></Header> },
    { name: "FaDog", description: <Dogs></Dogs> },
    { name: "Cats", description: <Cats></Cats> },
    { name: "", description: <Form></Form> },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  
  // const getDogData = () => {
  //   axios.get('/api/dogs')
  //   .then(() => {
  //     console.log('Dog data has been received!');
  //   })
  //   .catch(() => {
  //     alert('Error retreiving dog data!')
  //   });
  // };

  // const getCatData = () => {
  //   axios.get('/api/cats')
  //   .then(() => {
  //     console.log('Cat data has been received!');
  //   })
  //   .catch(() => {
  //     alert('Error retreiving cat data!')
  //   });
  // };


  return (
    <>
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
            Lost Pet?{" "}
          </button>

          {/* <button
            onClick={() => {
              setCurrentPage(pages[2]);
            }}
          >
            {" "}
            Cat Link{" "}
          </button> */}


          <>
            <Gallery currentPage={currentPage}></Gallery>
          </>
        </main>
        {/* <Nav/> */}
      </div>

      {/* <Login/> */}
    </>
  );
};

export default App;

import React from "react";
import {useState ,useEffect} from 'react';
import "./header.css";
import CTA from "./CTA";
import Dogs from "./Dogs";
import Cats from "./Cats";
// import Login from '../../src/Login'



  


const Header = () => {

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <header>
      <section>
        <div className="container header_container">
          <h1>WELCOME TO HAPPY PAWS</h1>

          <CTA />
          <Dogs />
          <Cats />
          {/* <Login/> */}

          
        </div>
        
      </section>

      <div>
      

      <div style={{height: '155rem'}} />

      {/* 👇️ scroll to top on button click */}
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#0C9',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        Scroll to top
      </button>
    </div>
    </header>
  );
};

export default Header;

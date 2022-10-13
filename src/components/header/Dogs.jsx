import React from 'react'
import './dogs.css'
import Perros from '../perros/Perros'
import {useState} from 'react';
import Gallery from '../Gallery';


const data = [
  {
    id:1 ,
    // image: IMG1,
    title: 'PUPPIES ',
    
  },
  {
    id:2 ,
    // image: IMG1,
    title: 'ADULT DOGS'
  },
]
const Dogs = () => {
  return (
    <section id="dogs">
      {/* <h5>DOGS</h5> */}
      <h2>DOGS</h2>

      <div className='container dogs-container'>
        {
          data.map(({ id, image,title}) => {
            return (
              <article key={id} className='dogs-item'>
          <div className='dogs-item-image'></div>
          <a href={Perros}>  <img src={image} alt=""/>   </a>
          <h3>{title}</h3>

        </article>
            )
          })
        }

      </div>
      </section>
  )
}
export default Dogs
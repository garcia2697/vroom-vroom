import React from 'react'
import './cats.css'


const data = [
  {
    id:1 ,
    // image: IMG1,
    title: 'KITTENS '
  },
  {
    id:2 ,
    // image: IMG1,
    title: 'ADULT CATS'
  }
]
const Cats = () => {
  return (
    <section id="cats">
      {/* <h5>CATS</h5> */}
      <h2>CATS</h2>

      <div className='container cats-container'>
        {
          data.map(({ id, image,title}) => {
            return (
              <article key={id} className='cats-item'>
          <div className='cats-item-image'></div>
          <img src={image} alt="" />
          <h3>{title}</h3>

        </article>
            )
          })
        }

      </div>
      </section>
  )
}
export default Cats
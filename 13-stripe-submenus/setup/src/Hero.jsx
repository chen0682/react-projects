import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At atque perspiciatis, dolores numquam, quod culpa expedita iste, suscipit repellat sed laudantium aperiam eaque? Veritatis sunt minima perferendis necessitatibus sequi dicta!</p>
          <button className='btn'>Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  )
}

export default Hero

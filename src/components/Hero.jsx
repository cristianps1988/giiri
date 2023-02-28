import React from 'react'

const Hero = () => {
  return (
    <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-5'>
        <div className='md:col-span-2'>
            <h1 className='text-3xl md:text-6xl text-center md:text-left mb-6 mt-3.5 md:mt-2'>Ahorra e invierte de manera inteligente</h1>
            <h2 className='text-center text-xs md:text-3xl md:text-left'>Obtén Cashback por tus compras y control total sobre tu dinero</h2>
        </div>
        <div className='md:col-span-3'>
            <img src="/public/hero.png" alt="hero" className='w-3/5 md:w-full ml-15 mt-9 md:m-0' />
        </div>
    </div>
    
  )
}

export default Hero

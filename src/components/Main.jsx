import React from 'react'

const Main = () => {
  return (
    <div className='w-11/12 mx-auto lg:grid lg:grid-cols-4 lg:mt-48 lg:gap-x-4'>
      <p className='text-5xl my-8 lg:text-7xl text-primary font-bold lg:col-span-1 text-center lg:pt-8'>¿Qué es Giiri?</p>
      <p className='text-xl text-center lg:text-4xl lg:text-left lg:col-span-3 leading-loose lg:leading-loose'>Somos una plataforma financiera que te permite <span className='font-bold'>ahorrar e invertir </span>de manera inteligente. Te damos un <span className='font-bold'>porcentaje de devolución por tus compras </span>en comercios aliados que puedes invertir en proyectos rentables y haces crecer tu dinero</p>
    </div>
  )
}

export default Main

import React from 'react'
import {text} from './text';
const {whatHeading, whatText} = text;

const Main = () => {
  return (
    <div className='w-11/12 mx-auto lg:grid lg:grid-cols-4 lg:mt-48 lg:gap-x-4 relative'>
      <p className='text-5xl my-8 lg:text-7xl text-primary font-bold lg:col-span-1 text-center lg:pt-8'>{whatHeading}</p>
      <p className='text-xl text-center lg:text-4xl lg:text-left lg:col-span-3 leading-loose lg:leading-loose'>{whatText}</p>
      <div className='absolute h-200 w-48 rotate-[61deg] rounded-full bg-secondary -z-30 -top-[28rem] -right-[22rem] lg:hidden'></div>
    </div>
  )
}

export default Main

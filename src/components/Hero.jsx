import React from 'react';
import {text} from './text';
const {title, subTitle, registerBtn, moreBtn, heroImg} = text;

const Hero = () => {
  return (
    <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-5 lg:relative'>
        <div className='md:col-span-2'>
            <h1 className='text-3xl md:text-6xl text-center md:text-left mb-6 mt-3.5 md:mt-2'>{title}</h1>
            <h2 className='text-center text-xs md:text-3xl md:text-left w-9/12 md:w-full mx-auto'>{subTitle}</h2>
            <button className='text-2xl text-black bg-primary py-2 px-8 mr-4 mt-6 rounded-3xl hidden lg:inline'>{registerBtn}</button>
            <button className='text-2xl text-primary bg-white border border-primary py-2 px-8 mt-6 rounded-3xl  hidden lg:inline'>{moreBtn}</button>
        </div>
        <div className='md:col-span-3 lg:absolute lg:-top-60 lg:right-0'>
            <img src={heroImg} alt="hero" className='w-3/5 md:w-full ml-15 mt-9 md:m-0' />
        </div>
        <button className='text-sm text-black bg-primary inline-block w-32 py-1 mx-auto mt-8 rounded-2xl lg:hidden'>{registerBtn}</button>
    </div>
    
  )
}

export default Hero

import React from 'react';
import {text} from './text';
const {title, subTitle, registerBtn, moreBtn, heroImg, heroImgAvif, heroImgWebp} = text;

const Hero = () => {
  return (
    <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-5 relative'>
        <div className='md:col-span-2'>
            <h1 className='text-3xl md:text-6xl text-center md:text-left mb-6 mt-3.5 md:mt-2'>{title}</h1>
            <h2 className='text-center text-xs md:text-3xl md:text-left w-9/12 md:w-full mx-auto'>{subTitle}</h2>
            <button className='text-2xl text-black bg-primary py-2 px-8 mr-4 mt-6 rounded-3xl hidden lg:inline'>
              <a target='_blank' rel="noopener noreferrer" href="https://airtable.com/shrAZtJGPWUixTGVh">{registerBtn}</a>
            </button>

            <button className='text-2xl text-primary bg-white border border-primary py-2 px-8 mt-6 rounded-3xl  hidden lg:inline'>
              <a target='_blank' rel="noopener noreferrer" href="https://airtable.com/shrAZtJGPWUixTGVh">{moreBtn}</a>
            </button>
        </div>
        <div className='md:col-span-3 lg:absolute lg:-top-60 lg:right-0'>
          <img src={heroImg} alt="hero" className='w-4/5 mx-auto md:w-full ml-15 mt-9 md:m-0 lg:mt-10' />
        </div>
        <button className='text-sm text-black bg-primary inline-block w-32 py-1 mx-auto mt-8 rounded-2xl lg:hidden'>
          <a target='_blank' rel="noopener noreferrer" href="https://airtable.com/shrAZtJGPWUixTGVh">{registerBtn}</a>
        </button>
        <div className='h-96 w-48 lg:h-[40rem] lg:w-200 rotate-45 lg:-rotate-45 rounded-full bg-primary -z-20 absolute -top-[12rem] -right-20 lg:-top-[25rem] lg:-right-[15rem]'></div>
        <div className='h-52 w-52 lg:h-96 lg:w-96 bg-glass absolute -top-[2rem] -right-5 md:top-[80px] lg:right-20 lg:-top-20  backdrop-blur-[5px] lg:backdrop-blur-3xl rounded-full -z-20'></div>
        <div className='h-200 w-48 lg:h-[25rem] lg:w-200 -rotate-[61deg] lg:rotate-[40deg] rounded-full bg-secondary -z-20 absolute -top-[14rem] -left-64 lg:top-[20rem] lg:-left-[35rem]'></div>
    </div>
    
  )
}

export default Hero

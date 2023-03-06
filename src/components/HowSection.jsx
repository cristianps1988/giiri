import React from 'react';
import {text} from './text';
const {howHeading, video, stepOne, stepTwo, stepTwoB, stepThree, stepFour, stepFive, startBtn} = text;

const HowSection = () => {
  return (
    <div className='w-11/12 mx-auto lg:mt-36 flex flex-col'>
      <div className='flex flex-col lg:flex-row-reverse'>
        <p className='text-5xl my-8 lg:text-7xl text-primary font-bold text-center lg:w-96 lg:my-auto'>{howHeading}</p>
        <img src={video} alt="video" className='lg:mx-auto'/>
      </div>
      {/* <div className='flex flex-col lg:flex-row align-middle justify-center'>
        <div className='flex flex-row justify-center lg:flex-col '>
          <div className='w-12 bg-primary h-12 rounded'></div>
          <p className='lg:w-32 h-24'>{stepOne}</p>
        </div>
        <div className='flex flex-row justify-center lg:flex-col'>
          <div className='w-12 bg-primary h-12 rounded'></div>
          <p className='lg:w-32 h-24'>{stepTwo}</p>
        </div>
        <div className='flex flex-row justify-center lg:flex-col'>
          <div className='w-12 bg-primary h-12 rounded'></div>
          <p className='lg:w-32 h-24'>{stepThree}</p>
        </div>
        <div className='flex flex-row justify-center lg:flex-col'>
          <div className='w-12 bg-primary h-12 rounded'></div>
          <p className='lg:w-32 h-24'>{stepFour}</p>
        </div>
        <div className='flex flex-row justify-center lg:flex-col'>
          <div className='w-12 bg-primary h-12 rounded'></div>
          <p className='lg:w-32 h-24'>{stepFive}</p>
        </div>
      </div> */}
      <div className='w-9/12 mx-auto grid grid-cols-3 lg:flex lg:flex-col text-xl lg:text-2xl mt-8 lg:mt-40'>
        <div className='col-span-1 lg:flex lg:flex-row lg:gap-24 lg:justify-center'>
          <div className=' w-10 lg:w-40 h-20 bg-primary '></div>
          <div className=' w-10 lg:w-40 h-20 bg-primary  '></div>
          <div className=' w-10 lg:w-40 h-20 bg-primary  '></div>
          <div className=' w-10 lg:w-40 h-20 bg-primary  '></div>
          <div className=' w-10 lg:w-40 h-20 bg-primary  '></div>
        </div>
        <div className='col-span-2 lg:flex lg:flex-row lg:gap-24 lg:justify-center text-center'>
          <p className='w-40 h-20 mx-auto py-6'>{stepOne}</p>
          <p className='w-40 h-20 my-auto mx-auto py-6 hidden lg:block'>{stepTwo}</p>
          <p className='w-40 h-20 my-auto mx-auto py-6 lg:hidden'>{stepTwoB}</p>
          <p className='w-40 h-20 my-auto mx-auto py-6'>{stepThree}</p>
          <p className='w-40 h-20 my-auto mx-auto py-6'>{stepFour}</p>
          <p className='w-40 h-20 my-auto mx-auto py-6'>{stepFive}</p>
        </div>
      </div>
      <button className='mt-8 lg:mt-20 text-xl lg:text-3xl text-white bg-primary py-1 px-10 rounded-2xl lg:rounded-3xl mx-auto'>{startBtn}</button>
    </div>
  )
}

export default HowSection

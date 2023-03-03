import React from 'react';
import {text} from './text';
const {howHeading, video, stepOne, stepTwo, stepThree, stepFour, stepFive, startBtn} = text;

const HowSection = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className=''>
        <p className='text-5xl my-8 lg:text-7xl text-primary font-bold text-center'>{howHeading}</p>
        <img src={video} alt="video" className=''/>
      </div>
      <div>
        <p>{stepOne}</p>
        <p>{stepTwo}</p>
        <p>{stepThree}</p>
        <p>{stepFour}</p>
        <p>{stepFive}</p>
      </div>
      <button>{startBtn}</button>

      
    </div>
  )
}

export default HowSection

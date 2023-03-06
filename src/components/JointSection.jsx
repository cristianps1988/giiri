import React from 'react';
import {text} from './text';
const {joinHeading, joinText, registerBtn, girlImg, girlBImg} = text;

const JointSection = () => {
  return (
    <div className='w-11/12 mx-auto mt-40 lg:mt-[70rem] flex flex-col relative'>
        <p className='text-5xl my-8 lg:text-7xl text-primary font-bold text-center lg:text-right lg:my-auto'>{joinHeading}</p>
        <p className='mt-10 lg:mt-20 text-xl lg:text-4xl lg:w-2/3 leading-relaxed lg:leading-loose text-center lg:text-left'>{joinText}</p>
        <button className='mt-32 lg:mt-20 text-xl lg:text-3xl text-black bg-primary py-1 px-10 rounded-2xl lg:rounded-3xl mx-auto'>{registerBtn}</button>
        <div>
            <img src={girlImg} alt="girl img" className='hidden lg:inline absolute top-40 right-0'/>
            <img src={girlBImg} alt="girl img" className='lg:hidden -z-10 absolute top-32'/>
        </div>
    </div>
  )
}

export default JointSection

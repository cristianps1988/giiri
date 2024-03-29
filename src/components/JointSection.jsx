import React from 'react';
import {text} from './text';
const {joinHeading, joinText, registerBtn, girlImg, girlBImg} = text;

const JointSection = () => {
  return (
    <div className='w-11/12 mx-auto mt-14 lg:mt-[70rem] flex flex-col relative'>
        <p className='text-5xl my-8 lg:text-7xl text-primary font-bold text-center lg:text-right lg:my-auto'>{joinHeading}</p>
        <p className='mt-10 lg:mt-20 text-xl lg:text-4xl lg:w-2/3 leading-relaxed lg:leading-loose text-center lg:text-left'>{joinText}</p>
        <button className='mt-32 lg:mt-20 text-xl lg:text-3xl text-black bg-primary py-1 px-10 rounded-2xl lg:rounded-3xl mx-auto'>
        <a target='_blank' rel="noopener noreferrer" href="https://airtable.com/shrAZtJGPWUixTGVh">{registerBtn}</a>
        </button>
        <div className='xl:mb-10 2xl:mb-24'>
          <img src={girlImg} alt="girl img" className='absolute -z-10 w-[18rem] top-[9rem] -left-[6rem] scale-x-[-1] opacity-25 lg:w-[40rem] lg:opacity-100 lg:scale-x-[1] lg:top-[8rem] xl:left-[43rem] 2xl:left-[70rem] min-[2560px]:left-[110rem]'/>
            {/* <img src={girlImg} alt="girl img" className='hidden lg:inline absolute top-40 right-0'/>
            <img src={girlBImg} alt="girl img" className='lg:hidden -z-10 absolute top-32 -left-4'/> */}
        </div>
        <div className='absolute hidden lg:block h-[40rem] w-[100rem] rotate-45 rounded-full bg-secondary -z-30 -top-[10rem] -left-[60rem]'></div>
    </div>
  )
}

export default JointSection

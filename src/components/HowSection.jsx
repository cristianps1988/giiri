import React from 'react';
import {text} from './text';
const {howHeading, video, stepOne, stepTwo, stepTwoB, stepThree, stepFour, stepFive, startBtn} = text;

const HowSection = () => {
  return (
    <div className='w-11/12 mx-auto lg:mt-36 flex flex-col relative'>
      <div className='flex flex-col lg:flex-row-reverse'>
        <p className='text-5xl my-8 lg:text-7xl text-primary font-bold text-center lg:w-96 lg:my-auto'>{howHeading}</p>
        <img src={video} alt="video" className='lg:mx-auto 2xl:w-[70rem] '/>
      </div>

      <div className='w-9/12 mx-auto text-xl lg:text-2xl mt-8 lg:mt-40'>

        <div className='flex flex-col lg:flex-row lg:text-center justify-between relative'>
          <div className='absolute m-0 p-0 bg-primary h-1 w-[250px] lg:h-2 xl:w-10/12 2xl:w-[90%] -z-50 rotate-90 lg:rotate-0 -left-[105px] top-[145px] lg:top-[45px] lg:left-[65px] '></div>
          <div className='flex flex-row py-3 lg:flex-col'>
            <div className='relative bg-primary w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full lg:mx-auto'>
              <div className='absolute bg-white w-[13px] lg:w-[26px] h-[4px] lg:h-[8px] rotate-45 top-[22px] lg:top-[44px] left-[8px] lg:left-[16px]'></div>
              <div className='absolute bg-white w-[18px] lg:w-[36px] h-[4px] lg:h-[8px] -rotate-45 top-[18px] lg:top-[36px] left-[16px] lg:left-[32px]'></div>
            </div>
            <p className='py-1 ml-8 text-xl font-extrabold lg:m-0 lg:max-w-[10rem] lg:text-3xl lg:mt-4'>{stepOne}</p>
          </div>

          <div className='flex flex-row py-3 lg:flex-col'>
            <div className='relative bg-primary w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full -z-10 lg:mx-auto'>
              <div className='absolute bg-white w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-full z-40 left-[5px] top-[5px] lg:left-[10px] lg:top-[10px] '></div>
              <div className='absolute bg-primary w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] rounded-full z-50 left-[12.5px] lg:left-[25px] top-[12px] lg:top-[24px]'></div>
            </div>
            <p className='hidden ml-8 text-xl font-extrabold lg:block py-1 lg:m-0 lg:max-w-[10rem] lg:text-3xl lg:mt-4'>{stepTwo}</p>
            <p className='lg:hidden ml-8 text-xl font-extrabold py-1'>{stepTwoB}</p>
          </div>

          <div className='flex flex-row py-3 lg:flex-col'>
            <div className='relative bg-primary w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full -z-10 lg:mx-auto'>
              <div className='absolute bg-white w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-full z-40 left-[5px] top-[5px] lg:left-[10px] lg:top-[10px] '></div>
              <div className='absolute bg-primary w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] rounded-full z-50 left-[12.5px] lg:left-[25px] top-[12px] lg:top-[24px]'></div>
            </div>
            <p className='py-1 ml-8 text-xl font-extrabold lg:m-0 lg:max-w-[10rem] lg:text-3xl lg:mt-4'>{stepThree}</p>
          </div>

          <div className='flex flex-row py-3 lg:flex-col'>
            <div className='relative bg-primary w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full -z-10 lg:mx-auto'>
              <div className='absolute bg-white w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-full z-40 left-[5px] top-[5px] lg:left-[10px] lg:top-[10px] '></div>
              <div className='absolute bg-primary w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] rounded-full z-50 left-[12.5px] lg:left-[25px] top-[12px] lg:top-[24px]'></div>
            </div>
            <p className='py-1 ml-8 text-xl font-extrabold lg:m-0 lg:max-w-[10rem] lg:text-3xl lg:mt-4'>{stepFour}</p>
          </div>

          <div className='flex flex-row py-3 lg:flex-col'>
            <div className='relative bg-primary w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full -z-10 lg:mx-auto'>
              <div className='absolute bg-white w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-full z-40 left-[5px] top-[5px] lg:left-[10px] lg:top-[10px] '></div>
              <div className='absolute bg-primary w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] rounded-full z-50 left-[12.5px] lg:left-[25px] top-[12px] lg:top-[24px]'></div>
            </div>
            <p className='py-1 ml-8 text-xl font-extrabold lg:m-0 lg:max-w-[10rem] lg:text-3xl lg:mt-4'>{stepFive}</p>
          </div>

        </div>
    
      </div>
      <button className='mt-8 lg:mt-20 text-xl lg:text-3xl text-white bg-primary py-1 px-10 rounded-2xl lg:rounded-3xl mx-auto'>
      <a target='_blank' rel="noopener noreferrer" href="https://airtable.com/shrAZtJGPWUixTGVh">{startBtn}</a>
      </button>
      <div className='absolute h-[60rem] w-[40rem] lg:h-[55rem] lg:w-[200rem] -rotate-[61deg] lg:-rotate-[40deg] rounded-full bg-secondary -z-30 -top-[10rem] -left-[27rem] lg:-top-[45rem] lg:-left-[5rem]'></div>
    </div>
  )
}

export default HowSection

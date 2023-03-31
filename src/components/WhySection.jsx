import React from 'react';
import {text} from './text';
const {whyHeading, whyText, menImg} = text;

const WhySection = () => {
  return (
    <div className='mt-14 lg:mt-36 w-11/12 mx-auto relative'>
        <p className='text-5xl my-8 lg:text-7xl text-primary font-bold text-center lg:text-left lg:my-auto'>{whyHeading}</p>
        <p className='mt-16 lg:mt-80 text-xl lg:text-4xl lg:w-2/3 lg:absolute lg:right-0 leading-relaxed lg:leading-loose text-center lg:text-left'>{whyText}</p>
        <img src={menImg} alt="men img" className='-z-10 w-52 lg:w-auto absolute top-14 lg:top-32 right-0 lg:left-0'/>
    </div>
  )
}

export default WhySection

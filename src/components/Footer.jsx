import React from 'react';
import {text} from './text';
const {logoB, logoC, facebook, tiktok, instagram, copy} = text;

const Footer = () => {
  return (
    <div className='h-44 lg:h-60 w-full mt-24 lg:mt-80 bg-primary flex flex-col '>
        <div className='mx-auto lg:ml-0'>
            <img src={logoB} className="lg:hidden" alt='logo'/>
            <img src={logoC} className="hidden lg:block" alt='logo' />
        </div>
      <div className='flex flex-row mx-auto lg:mr-8 lg:-mt-16'>
        <a href="#" className='lg:w-full lg:h-full px-4 lg:px-6'>
            <img src={facebook} alt="facebook" className=''/>
        </a>
        <a href="#" className='lg:w-full lg:h-full px-4 lg:px-6'>
            <img src={tiktok} alt="tiktok" className=''/>
        </a>
        <a href="#" className='lg:w-full lg:h-full px-4 lg:px-6'>
            <img src={instagram} alt="instagram" className=''/>
        </a>
      </div>
      <p className='text-white text-xs mt-2 lg:text-2xl text-center lg:text-left lg:ml-8 lg:-mt-2'>{copy}</p>
    </div>
  )
}

export default Footer

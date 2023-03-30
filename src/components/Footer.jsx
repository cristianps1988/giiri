import React from 'react';
import {text} from './text';
const {logoB, logoC, facebook, tiktok, instagram, copy} = text;

const Footer = () => {
  return (
    <div className='h-44 lg:h-60 w-full mt-24 lg:mt-80 bg-primary flex flex-col '>
        <div className='mx-auto lg:ml-0'>
            <img src={logoB} className="lg:hidden w-[6.5rem]" alt='logo'/>
            <img src={logoC} className="hidden lg:block w-[23rem]" alt='logo' />
        </div>
      <div className='flex flex-row mx-auto lg:mr-8 lg:-mt-16'>
        <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/soygiiri" className='lg:w-full lg:h-full px-4 lg:px-6'>
            <img src={facebook} alt="facebook" className='w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]'/>
        </a>
        <a target='_blank' rel="noopener noreferrer" href="https://www.tiktok.com/@soygiiri" className='lg:w-full lg:h-full px-4 lg:px-6'>
            <img src={tiktok} alt="tiktok" className='w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]'/>
        </a>
        <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/soygiiri/" className='lg:w-full lg:h-full px-4 lg:px-6'>
            <img src={instagram} alt="instagram" className='w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]'/>
        </a>
      </div>
      <p className='font-pop text-white text-xs mt-4 lg:text-2xl text-center lg:text-left lg:ml-8 lg:-mt-2'>{copy}</p>
    </div>
  )
}

export default Footer

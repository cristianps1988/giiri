import React from 'react';
import {text} from './text';
const {logoA, logoADark} = text;

const Header = () => {
    return (
        <header className='w-11/12 ml-8 lg:mx-auto mt-6 lg:mt-16 mb-8 ' >
            <img src={logoA} alt="logo" className="w-40 md:w-auto dark:hidden" />
            <img src={logoADark} alt="logo" className="w-40 md:w-auto hidden dark:block" />
        </header>
    )
}

export default Header

import React from 'react';
import {text} from './text';
const {logoA} = text;

const Header = () => {
    return (
        <header>
            <img src={logoA} alt="logo" className="w-40 md:w-auto" />
        </header>
    )
}

export default Header

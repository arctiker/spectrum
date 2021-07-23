import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';

const Header = () => (
    <div className='header'>
        <Link className='home-container' to='/'>
            <div className='home-page'>Home</div>
        </Link>
        <div className='options'>
            <Link className='option' to='/internet'>Internet</Link>
            <Link className='option' to='/about'>About</Link>
            <Link className='option' to='/services'>Services</Link>
        </div>    
    </div>
);

export default Header;
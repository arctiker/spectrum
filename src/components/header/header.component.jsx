import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';

const Header = () => (
    <div className='header'>
        <Link className='home_link' to='/'> Home </Link>
        <div className='services'>
        <Link className='option' to='/internet'>Internet</Link>
        <Link className='option' to='/about'>About</Link>
        <Link  to='/services'>Services</Link>
        </div>
    </div>
);

export default Header;
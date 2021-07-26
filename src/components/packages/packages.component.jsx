import React from 'react';
import Order from '../order/order.component';
import { Button } from '../order/order.component';

const Packages = () => (
    
    <div className='homepage'>
        <div className='service'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>4MB HIGH</h1>
                    <Button onClick={Order} className='button' >ORDER SERVICE</Button>
                </div>
            </div> 
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>5MB HIGH</h1>
                    <Button onClick={Order} className='button'>ORDER SERVICE</Button>
                </div>
            </div> 
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>6MB HIGH</h1>
                    <Button onClick={Order} className='button'>ORDER SERVICE</Button>
                </div>
            </div> 
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>7MB HIGH</h1>
                    <Button onClick={Order} className='button'>ORDER SERVICE</Button>
                </div>
            </div> 
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>8MB HIGH</h1>
                    <Button onClick={Order} className='button'>ORDER SERVICE</Button>
                </div>
            </div> 
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>9MB HIGH</h1>
                    <Button onClick={Order} className='button'>ORDER SERVICE</Button>
                </div>
            </div> 
        </div>
    </div>

);

export default Packages;
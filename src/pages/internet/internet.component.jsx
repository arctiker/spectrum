import React from 'react';
import './internet.styles.scss';



function Internet() {
    return (
    <div className='container'>
        
        <div className='row1'>
            <h1>Why Spectrum</h1>
            <h4>24/7 help whenever you need it, plus Internet service with in-home WiFi support.</h4>
        </div>
        <div className='items'>
            <div className='row2'>
                <img src="/assets/logo-wifi.png" className='icon'alt='' />
                <h2>A reliable connection</h2>
                <p className='p'>For all your devices, even when everyone’s online.</p>
            </div>  
            <div className='row2'>
                <img src="/assets/logo-speed.png" className='icon' alt='' />
                <h2>The speed you need</h2>
                <p className='p'>Do more of what you love with the fastest Internet and WiFi coverage.</p>
            </div> 
            <div className='row2'>
                <img src='/assets/logo-security.png' className='icon' alt='' />
                <h2>Protect your devices</h2>
                <p className='p'>Help keep loved ones safe and secure online, with Advanced Security included.</p>
            </div>
            <div className='row2'>
                <img src='/assets/logo-remote.png' className='icon' alt='' />
                <h2>Ip-tv box</h2>
                <p className='p'>Tons of great content and features.</p>
            </div>
        </div>
    </div>
);
}

export default Internet;
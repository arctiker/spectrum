import React from 'react';
import './internet.styles.scss';


function Internet() {
    return (
    <div className='container'>
        <div className='block-0'>
            <h1 className='homepage'>Why Spectrum</h1>
            <h4 className='homepage'>24/7 help whenever you need it, plus Internet service with in-home WiFi support.</h4>
        </div>
        <div className='block-1'>
            <img src="/assets/logo-wifi.png" alt='' />
            <h2 className='txt'>A reliable connection</h2>
            <p className='txt-p'>For all your devices, even when everyone’s online.</p>
        </div>  
        <div className='block-2'>
            <img src="/assets/logo-speed.png" alt='' />
            <h2>The speed you need</h2>
            <p>Do more of what you love with the fastest Internet and WiFi coverage.</p>
        </div> 
        <div className='block-3'>
            <img src='/assets/logo-security.png' alt='' />
            <h2>Protect your devices</h2>
            <p>Help keep loved ones safe and secure online, with Advanced Security included.</p>
        </div>
        <div className='block-4'>
            <img src='/assets/logo-remote.png' alt='' />
            <h2>Ip-tv box</h2>
            <p>Tons of great content and features.</p>
        </div>
    </div>
);
}

export default Internet;
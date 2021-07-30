import React, { useState } from 'react';
import LoginForm from './LoginForm';

function Sign() {

    const Logout = () => {
      console.log('Logout');
    }

    return (
        <div className=''>
            {(user.email !='') ? (
                <div className='welcome'>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button>Logout</button>
                </div>
            ) :(
                <LoginForm />
            )
            }
        </div>
    )
}

export default Sign;
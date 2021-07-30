import React, { useState } from 'react'
import FormInput from '../../components/form-input/form-input.component';

import CustomButton from '../../components/custom-button/custom-button.component';

function SignIn() {

    const adminUser ={
        email: 'admin@admin.com',
        password: 'admin123'
    }
        
    const [user, setUser] = useState({email:'', password:''});
   
    
    handleSubmit = event => {
        event.preventDefault();
        setUser({email:'', password:''})
    };

    handleChange = event => {
        const {value, name} = event.target;
        setUser({ [name]: value});
    };
    
    return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={handleChange}
                        value={setUser.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        handleChange={handleChange}
                        value={setUser.password}
                        label='password'
                        required
                    />
                    <CustomButton type='submit'>Sign in</CustomButton>
                </form>
            </div>
        
    )
}

export default SignIn;

import React from 'react';
import { useState } from 'react';
import SignupForm from './SignupForm';
import { loginUser } from '../services/apiService';

const LoginForm = () => {
    const [signupOn, setSignupOn] = useState(false);
    const handleSignupButton = () => {
        setSignupOn(true);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = {
            username: formData.get('username'),
            password: formData.get('password')
        };

        try {
            await loginUser(userData);
        } catch (error) {
            console.error('Login Error:', error.message);
        }
    };

    return (
        <div>
            {signupOn ? <SignupForm /> : (
                <div>
                    <h2>Login</h2>
                    <form action={{ apiService }} >
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" required/>
                            <br />
                        <label htmlFor="password" >Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required/>
                            <br />
                        <input type="submit" value="Login" />
                    </form>
                    <button onClick={handleSignupButton}>
                        Switch to Signup
                    </button>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
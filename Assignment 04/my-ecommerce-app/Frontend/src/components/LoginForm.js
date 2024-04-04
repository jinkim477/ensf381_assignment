import React from 'react';
import { useState } from 'react';
import SignupForm from './SignupForm';

const LoginForm = () => {
    const [signupOn, setSignupOn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignupButton = () => {
        setSignupOn(true);
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const loginUser = {
            username: username,
            password: password
        };

        fetch('http://localhost:5100/login/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginUser)
        })
    };

    return (
        <div>
            {signupOn ? <SignupForm /> : (
                <div>
                    <h2>Login</h2>
                    <form>
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
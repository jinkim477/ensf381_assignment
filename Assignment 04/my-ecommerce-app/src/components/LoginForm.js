import React from 'react';
import { useState } from 'react';
import SignupForm from './SignupForm';

const LoginForm = () => {
    const [signupOn, setSignupOn] = useState(false);
    const handleSignupButton = () => {
        setSignupOn(true);
    };

    return (
        <div>
            {signupOn ? <SignupForm /> : (
                <div>
                    <h2>Login</h2>
                    <form>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" /><br />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" /><br />
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
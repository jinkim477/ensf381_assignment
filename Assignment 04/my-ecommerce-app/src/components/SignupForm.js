import { useState } from 'react';
import LoginForm from './LoginForm';
import { registerUser } from '../services/apiService';


const SignupForm = () => {;
    const [loginOn, setLoginOn] = useState(false);
    const handleLoginButton = () => {
        setLoginOn(true);   
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = {
            username: formData.get('username'),
            password: formData.get('password'),
            email: formData.get('email')
        };
        try {
            await registerUser(userData);
        } catch (error) {
            console.error('Signup Error', error.message);
        }
    };

    return (
        <div>
            {loginOn ? <LoginForm /> : (
                <div>
                <h2>Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" required/>
                            <br />
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required/>
                            <br />
                        <label for="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required/>
                            <br />
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required/>
                            <br />
                        <input type="submit" value="Signup" />
                    </form>
                    <button onClick={handleLoginButton}>
                        Switch to Login
                    </button>
                </div>
            )}
        </div>
    );
};

export default SignupForm;
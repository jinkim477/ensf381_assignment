import { useState } from 'react';
import LoginForm from './LoginForm';

const SignupForm = () => {;
    const [loginOn, setLoginOn] = useState(false);
    const handleLoginButton = () => {
        setLoginOn(true);   
    };

    return (
        <div>
            {loginOn ? <LoginForm /> : (
                <div>
                <h2>Signup</h2>
                    <form>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" /><br />
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" /><br />
                        <label for="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" name="confirm-password" /><br />
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" /><br />
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
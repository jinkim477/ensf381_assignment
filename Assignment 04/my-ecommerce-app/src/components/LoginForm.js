import { useEffect, useState } from 'react';
import SignupForm from './SignupForm';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    return (
        <div>
            <h2>Login</h2>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" /><br />
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" /><br />
                <input type="submit" value="Login" />
            </form>
            <button onclick={changeRoute}>
                Switch to Signup
            </button>
        </div>
    );
};

export default LoginForm;
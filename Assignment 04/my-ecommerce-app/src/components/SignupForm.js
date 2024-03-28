import { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {

    return (
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
            <button onClick={changeRoute}>
                Switch to Login
            </button>
        </div>
    );
};

export default SignupForm;
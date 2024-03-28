import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {

    let navigate = useNavigate();
    const changeRoute = () => {
        let path = '/signup';
        navigate(path);
    };

    return (
        <div>
            <Header />
            <LoginForm changeRoute={changeRoute}/>
            <Footer />
        </div>
    );
};

export default LoginPage;
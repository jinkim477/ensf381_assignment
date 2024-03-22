import React from 'react';
import { Link } from 'react-router-dom';

// Added as little styling as possible to resemble the gif example.

const styles = {
    top: {
        display: "flex",
        justifyContent: "space-between",
    },
    companyLogo: {
        width: '80px',
    },
    companyName:{
        display: "flex",
        alignItems: 'center',
    },
    navBar: {
        display: "flex",
        justifyContent: "space-between",
        listStyleType: "none",
        padding: 0,
    },
};

const Header = () => {
    return (
        <header>
            <nav>
                <div style={styles.top}>
                    <img src="/images/logo.png" alt="logo" style={styles.companyLogo}/>
                    <span style={styles.companyName}>Company Name</span>
                </div>  
                <ul style={styles.navBar}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
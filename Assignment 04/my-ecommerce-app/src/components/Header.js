import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        width: "80px",
    },
    companyName: {
        fontSize: "1.5rem",
    },
    navigation: {
        display: "flex",
        justifyContent: "space-between",
        listStyleType: "none",
        padding: "10px",
        fontSize: "1.5rem",
    },
};

const Header = () => {
    return (
        <header>
            <nav>
                <div style={styles.header}>
                    <img src="/images/logo.png" alt="logo" style={styles.logo}/>
                    <span style={styles.companyName}>Company Name</span>
                </div>
                <ul style={styles.navigation}>
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
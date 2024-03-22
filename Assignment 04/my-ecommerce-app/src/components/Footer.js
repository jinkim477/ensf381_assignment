import React from 'react';

const styles = {
    footer: {
        textAlign: "left",
        fontSize: "1.5rem",
    }
}


const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
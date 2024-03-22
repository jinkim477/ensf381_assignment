import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const styles = {
    productPageRow: {
        display: "flex",
        justifyContent: "space-between",
    },
};

const Productpage = () => {
    return (
        <div className="product-page">
            <Header />
            <table style={{width: '100%'}}>
                <tr style={styles.productPageRow}>
                    <td><ProductList /></td>
                    <td style={{verticalAlign: 'top', width: '400px'}}><Cart /></td>
                </tr>
            </table>

            <Footer />
        </div>
    )
};

export default Productpage;
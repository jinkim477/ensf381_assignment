import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

// Added as little styling as possible to resemble the gif example.

const Productpage = () => {
    return (
        <div className="product-page">
            <Header />
            <table style={{width: '100%'}} >
                <tr style={{display: 'flex', justifyContent:'space-between'}}>
                    <td><ProductList /></td>
                    <td style={{verticalAlign: 'top', width: '25%', justifyContent: 'left',}}><Cart /></td>
                </tr>
            </table>

            <Footer />
        </div>
    )
};

export default Productpage;
import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer';

const Productpage = () => {
    return (
        <div>
            <Header />
            <div>
                <ProductList />
            </div>

            <Footer />
        </div>
    )
};

export default Productpage;
import React from 'react';
import ProductItem from './ProductItem';
import product from '../data/product';

const ProductList = ({ addToCart }) => {

    const productsData = product;

    return (
        <div >
            {productsData.map((product, index) => (
                <div key={index} >
                    <ProductItem product={product} addToCart={addToCart} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
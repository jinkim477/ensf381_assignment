import React from 'react';
import ProductItem from './ProductItem';
import product from '../data/product';

/*
    - ProductList component displays a list of products.

    - Import the ProductItem component to render individual product items.

    - Import the productsData array from the products.js file, which contains
      information about the products.

    - Pass each product in the productsData array to the ProductItem component
      to create an instance of the ProductItem component.
*/

const ProductList = () => {

    const productsData = product;

    return (
        <div >
            {productsData.map((product, index) => (
                <div key={index} >
                    {ProductItem(product)}
                </div>
            ))};
        </div>
    );
};

export default ProductList;
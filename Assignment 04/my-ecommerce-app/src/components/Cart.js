import React from 'react';
import ProductItem from './ProductItem';

/*
    - Pass each item in the cart to CartItem component to create an instance of the CartItem component.
    
    - Calculates and displays the total price of all items in the cart.
*/

const Cart = () => {
    const cart = [];

    return (
        <div>
            <h1>Shopping Cart</h1>

            <p>Total (In Cart): $0.00</p>
        </div>
    );
};

export default Cart;
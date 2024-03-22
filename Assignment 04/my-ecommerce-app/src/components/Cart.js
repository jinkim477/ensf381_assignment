import React from 'react';
import ProductItem from './ProductItem';

/*
    - Pass each item in the cart to CartItem component to create an instance of the CartItem component.
    
    - Calculates and displays the total price of all items in the cart.
*/

const styles = {
    cart: {
        display: "flex",
        justifyContent: "left",
        flexDirection: "column",
        textAlign: "left",
    },
};

const Cart = () => {
    const cart = [];
    

    return (
        <div style={styles.cart} >
            <h1>Shopping Cart</h1>

            <p style={{fontSize:"1.5rem"}}>Total (In Cart): $0.00</p>
        </div>
    );
};

export default Cart;
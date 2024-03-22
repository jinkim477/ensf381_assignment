import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart }) => {

    function totalCost(items) {
        return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div >
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <CartItem item={item} removeFromCart={removeFromCart} />
                    </div>
                ))}
            </div>
            <p>Total (In Cart): ${totalCost(cartItems)} </p>
        </div>
    );
};

export default Cart;
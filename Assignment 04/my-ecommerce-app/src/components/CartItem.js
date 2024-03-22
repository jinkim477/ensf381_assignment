import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
      <div >
          <img src={item.image} alt={item.name} style={{ width: '100px'}} />
          <p >{item.name}</p>
          <p >${item.price}</p>
          <p >Quantity: {item.quantity}</p>
          <p >Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
      </div>
  );
};

export default CartItem;
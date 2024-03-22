import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import { useState, useEffect } from 'react';

// Added as little styling as possible to resemble the gif example.

const Productpage = () => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        return savedCartItems || [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
    
    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
        if (existingItemIndex >= 0 ){
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}]);
        }
    };

    const removeFromCart = (product) => {
        const updatedCartItems = [...cartItems]
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
        if (existingItemIndex >= 0 ){
            if (product.quantity > 1) {
                updatedCartItems[existingItemIndex] = {...product, quantity: product.quantity - 1};
            } else {
                updatedCartItems.splice(existingItemIndex, 1);
            }
            setCartItems(updatedCartItems);
        };
    };

    return (
        <div className="product-page">
            <Header />
            <table style={{width: '100%'}} >
                <tr style={{display: 'flex', justifyContent:'space-between'}}>
                    <td><ProductList addToCart={addToCart}/></td>
                    <td style={{verticalAlign: 'top',justifyContent: 'left', width: cartItems.length > 0 ? '50%' : '25%'}}>
                        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
                    </td>
                </tr>
            </table>
            <Footer />
        </div>
    );
}
export default Productpage;
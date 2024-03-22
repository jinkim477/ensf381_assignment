import React from "react";
import { useState } from "react";


/* 
    - ProductItem component displays individual product details including
      the product image, name, price, and "Add to Cart" button.

    - Implement a hoovering effect on the product name, product description
      will be displayed onMouseEnter and disappear onMouseLeave. You can use
      the useState hook to implement this toggling functionality.

    - Once the "Add to Cart" button is clicked, the product with its associated
      data will be displayed as a CartItem. You will receive the details of 
      CartItem component in the later part of this assignment.
*/


const ProductItem = (product) => {  
    const styles = {
        productImage: {
            width: "250px",
        }
    };

    const [showDescription, setShowDescription] = useState(false);


    const handleMouseEnter = () => {
        setShowDescription(true);
    };


    const handleMouseLeave = () => {
        setShowDescription(false);
    };


    const handleAddToCart = () => {
        // Add your logic for adding the product to the cart here
        
    };

    return (
        <div>
            <img src={product.image} alt={product.name} style={styles.productImage}/>
            <p
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {product.name}
            </p>
            <p >${product.price}</p>
            <button onClick={handleAddToCart}>
                Add to Cart
            </button>
            {showDescription && <p >{product.description}</p>}
        </div>
    );
};

export default ProductItem;

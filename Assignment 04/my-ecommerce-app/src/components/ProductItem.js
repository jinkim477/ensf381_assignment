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



const styles = {
    productImage: {
        width: "300px",
    },
    productInfo: {
        textAlign: "left",
        fontSize: "1.5rem",
        margin: "0px",
    },
    addToCartButton: {
        display: "flex",
        justifyContent: "left",
        fontSize: "1.5rem",
    },
};

const ProductItem = (product) => {
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
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <p
                style={styles.productInfo}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {product.name}
            </p>
            <p style={styles.productInfo}>${product.price}</p>
            <button style={styles.addToCartButton} onClick={handleAddToCart}>
                Add to Cart
            </button>
            {showDescription && <p style={styles.productInfo}>{product.description}</p>}
        </div>
    );
};

export default ProductItem;

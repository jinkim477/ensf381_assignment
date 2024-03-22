import React from "react";
import { useState } from "react";

const ProductItem = ({ product, addToCart }) => {  
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
            <button onClick={() => addToCart(product)}>
                Add to Cart
            </button>
            {showDescription && <p >{product.description}</p>}
        </div>
    );
};

export default ProductItem;

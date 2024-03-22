import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import reviews from "../data/review";

// Added as little styling as possible to resemble the gif example.

const HomeMainSection = () => {

    const styles = {
        showNowText: {
            textDecoration: "none",
            color: "black",
        },
    };

    const [randomReviews, setRandomReviews] = useState([]);

    useEffect(() => {
        const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
        const twoRandomReviews = shuffledReviews.slice(0, 2);
        setRandomReviews(twoRandomReviews);
    }, []);

    
    const renderStars = (rating) => {
        let stars = "";
        for(let i = 0; i < rating; i++) {
            stars += i <= rating ? "★" : "";
        }
        return stars;
    };

    return (
        <div >
            <section>
                <h2>About Us</h2>
                <p>
                    Welcome to our online store! We are passionate about providing
                    high-quality products and exceptional customer service. Learn more
                    about our story and commitment to your satisfaction.
                </p>
                <button style={styles.shopNowButton}>
                    <Link to="/products" style={styles.showNowText}>Shop Now</Link>
                </button>
            </section>

            <section style={styles.section}>
                <h2>Customer Reviews</h2>
                {randomReviews.map((review, index) => (
                    <div key={index}>
                        <p>{review.customerName}</p>
                        <p>{review.reviewContent}</p>
                        <p>{renderStars(review.stars)}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default HomeMainSection;

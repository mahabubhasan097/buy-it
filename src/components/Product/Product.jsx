import React from 'react';
import './Product.css';
const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-details">
                <h5 className="product-name">{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;
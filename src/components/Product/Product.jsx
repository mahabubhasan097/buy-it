import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const { id, img, name, seller, ratings, price } = props.product;

    return (
        <div className="product">
            <div className='product-image-container'> 
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h5 className="product-name">{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)}>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;
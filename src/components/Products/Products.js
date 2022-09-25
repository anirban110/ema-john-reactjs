import React from 'react';
import './Products.css'
const Products = (props) => {
    const {img, name, seller, price, ratings} = props.product;
    console.log(props)
    return (
        <div className='products'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} Stars</small></p>
                
            </div>
            <button className='cart-btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Products;
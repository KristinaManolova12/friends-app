import React from 'react'
// import Product from './Shop';
import { Link } from 'react-router-dom'
function ProductList(props) {
    
    return (
            <article className="shop-article">
            <div className="imgDiv">
            <img className="img" src={props.productImg} alt='product-img' />
            </div>
            <div className='description'>
                <p className='productName p'>{props.name}</p>
                <p className='p' >{props.description} </p>
                <p className='p price'>Price: {props.price} $</p>
                
            </div>
            <hr/>
            <Link to={`/product/${props.id}`} className="shop-btn">See More</Link>
        </article>
        
    );
    
}

export default ProductList
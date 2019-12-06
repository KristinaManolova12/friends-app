import React, { Children } from 'react'
import './ShopDetails.css'
// import ProductList from './ShopList'
import { Link } from 'react-router-dom'
import productService from '../../services/productService';

class ProductDetails extends React.Component {
    state = {
        isSame: false
    };
    
          
    componentDidMount() {
        const id = this.props.match.params.id;
        const authenticated = this.props
        debugger
        productService.loadProduct(id).then(data =>{
            const product = data
            debugger
            if (userId === data.author) {
                debugger
                this.setState({isSame: true})
            }
            this.setState( {name: product.name,id: product._id, description: product.description, price: product.price, productImg: product.productImg, authotId: product.author})
        
         });
         const userId = this.props.userId;
        
    }

    render() {
        const isLogged = this.props.isLogged
        return (
            <div className="div-details">
            <article className="detail-article">
            <div className="imgDiv-details">
            <img className="img-detail" src={this.state.productImg} alt='product-img' />
            </div>
            <div className='description-details'>
                <p className='product-detail detail-name'>{this.state.name}</p>
                <p className='product-detail' >{this.state.description} </p>
                <p className='product-detail'>Price: {this.state.price} $</p>
                
            </div>
            <hr/>
           
               {this.state.isSame &&
                <div className="detail-btn">
                <Link to={`/product/edit/${this.state.id}`} className="product-btn">Edit</Link>
                <Link to={`/product/${this.state.id}`} className="product-btn">Delete</Link>
                </div>}
           {!this.state.isSame && 
                <div className="detail-btn">
                <Link to={`/product/${this.state.id}`} className="product-btn">Buy</Link>
            </div>
            }
            
        </article>
        </div>
        )
    }
}


export default ProductDetails
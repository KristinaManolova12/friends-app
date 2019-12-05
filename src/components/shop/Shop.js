import React from 'react'
import './Shop.css'
import ProductList from './ShopList'
// import products from './data'
import productService from '../../services/productService'
import { Link } from 'react-router-dom'
class Product extends React.Component {
    state = {
        products: null
      };
    
      componentDidMount() {
        productService.loadAllProducts().then(products => {
            
          this.setState({ products });
        });
      }
    render() {
        const { products } = this.state;
        
        const isLogged = this.props.isLogged
        return (
            
            <div className='shop'>
           {products ?
             <div>
                <h3 className="shopH">Find your favorite F.R.I.E.N.D.S thing</h3>
                {isLogged &&   <p>If you want to make someone happy today, share with us what you have to
               <span className="offer-span"><Link to="/create-product" className="create-link">OFFER</Link></span> </p>}
               
                {products.map((product) => 
                <ProductList key={product._id} name= {product.name} price={product.price} description ={product.description} productImg = {product.productImg} id= {product._id}/>)}
               </div> : <div>Loading...</div>
               
           }
            </div>
        )
    }
}


export default Product
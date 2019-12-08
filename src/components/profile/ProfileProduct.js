import React from 'react'
import './Profile.css'
import ProductList from '../shop/ShopList'
import userService from '../../services/user-service'
import NavProfile from './Nav-Profile'
class ProfileProducts extends React.Component {
    state = {
        products: null
      };
    
      componentDidMount() {
        const userId = this.props.userId;
        console.log(userId);
        debugger
        userService.loaduser(userId).then(userdata => {
            debugger
            const user = userdata;
            const products = user.products
            console.log(products)
          this.setState({ products });
        });
      }
    render() {
        const { products } = this.state;
        console.log(products)
        return (
            
            <div className='shop'>
              <NavProfile/>
           {products ?
             <div>
               
                {products.map((product) => 
                <ProductList key={product._id} name= {product.name} price={product.price} description ={product.description} productImg = {product.productImg} id= {product._id}/>)}
               </div> : <div>Loading...</div>
               
           }
            </div>
        )
    }
}


export default ProfileProducts
import React from 'react'
import './Profile.css'
import ProductList from '../shop/ShopList'
import userService from '../../services/user-service'
import NavProfile from './Nav-Profile'
import notfound from '../../images/NotFound.gif'
class ProfileProducts extends React.Component {
    state = {
        products: ''
      };
    
      componentDidMount() {
        const userId = this.props.userId;
        userService.loaduser(userId).then(userdata => {
            
            const user = userdata;
            const products = user.products
          
          this.setState({ products });
        });
      }
    render() {
        const { products } = this.state;
        
        return (
            
            <div className='shop'>
              <NavProfile/>
           {products.length >0 ?
             <div>
               
                {products.map((product) => 
                <ProductList key={product._id} name= {product.name} price={product.price} description ={product.description} productImg = {product.productImg} id= {product._id}/>)}
               </div> :<div className="message-error">
         
         <p className="message-p">Sorry... You don't have any offers</p> 
          <img src={notfound} alt="img" className="no-message"></img>
          </div> }
            </div>
        )
    }
}


export default ProfileProducts
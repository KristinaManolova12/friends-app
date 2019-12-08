import React from 'react'
import './ShopDetails.css'
import { Link } from 'react-router-dom'
import productService from '../../services/productService';
import BuyProduct from '../profile/Buy';


class ProductDetails extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        isSame: false,
        isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
    
}  
handleClick(){
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }))
}
    componentDidMount() {
        const id = this.props.match.params.id;
       
        productService.loadProduct(id).then(data =>{
            const product = data
      
            if (userId === data.author) {
                this.setState({isSame: true})
            }
            this.setState( {name: product.name,id: product._id, description: product.description,
                 price: product.price, productImg: product.productImg, authorId: product.author})
        
         });
         const userId = this.props.userId;
        
    }

    render() {
        // const isLogged = this.props.isLogged
        return (
            <div className="div-details">
            <article className="detail-article">
            <div className="imgDiv-details">
            <img className="img-detail" src={this.state.productImg} alt='product-img' />
            </div>
            <div className='description-details'>
                <p className='detail-name'>{this.state.name}</p>
                <p className='product-detail' >{this.state.description} </p>
                <p className='product-detail'>Price: {this.state.price} $</p>
                
            </div>
            <hr/>
           
               {this.state.isSame &&
                <div className="detail-btn">
                <Link to={`/product/edit/${this.state.id}`} className="product-btn">Edit</Link>
                <Link to={`/product/delete/${this.state.id}`} className="product-btn">Delete</Link>
                </div>}
           {!this.state.isSame && 
                <div className="detail-btn">
                    <div >
                    <button onClick={this.handleClick} className="product-buy-btn"> Buy </button>
                    {this.state.isToggleOn ?
                        null
                        :
                   
                    <BuyProduct productId= {this.state.id}  productAuthorId= {this.state.authorId}/>}
                   </div>
            </div>
            }
            
        </article>
        </div>
        )
    }
}


export default ProductDetails
import React from 'react'
import '../App.css'
import './shop.css'

class Product extends React.Component {
    render() {
        return (
            <div className='divPage'>
                <section className='product'>
                    <div className='image'>
                        <img src={this.state.image} alt='img' />
                    </div>
                    <div className='description'>
                        <p className='productName'>{this.state.name}</p>
                        <p>{this.state.description}</p>
                        
                        <div class="custom-select">
                        <p className='size'>Size:</p>
                        <select>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                        </div>
                        <p>Price: {this.state.price} $</p>
                        <button type='submit'>Buy</button>
                    </div>
                </section>
            </div>
        )
    }
}


export default Product
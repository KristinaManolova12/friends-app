import React from "react";
import './Buy.css';
// import * as yup from 'yup';
import productService from '../../services/messageService'


class BuyProduct extends React.Component {
  
    constructor(props) {
        super(props);
        this.handleInputChange= this.handleInputChange.bind(this)
        this.state = {
           name: '',
           phone: '',
           message:'',
           productId: this.props.productId,
           productAuthorId: this.props.productAuthorId,
           successMessage: ''
        }
    }

    
    submitHandler = (e) => { 
        debugger
        e.preventDefault()
        const data = this.state
       
        console.log(data);
        
        debugger
        productService.createMessage(data).then(() => {
            this.setState({message: '', name:'', phone: '', successMessage: 'Your message was sent successfully!' })
        });


    }


    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
       const successMessage= this.state.successMessage
        return (
            <div className="buy-product">
              { successMessage && <div className="success-div">
                    <h3 className="success">{successMessage}</h3>
                </div>}
                <form className="buy">
                    <div className="form-control buy-div">
                        <label className="buy-label">Your name</label>
                        <input type="text" placeholder="Write your name" name="name" id="name" value={this.state.name}
                            onChange={this.handleInputChange} required/>
                    </div>
                    
                    <div className="form-control buy-div">
                        <label className="buy-label">Phone Number</label>
                        <input type="number" placeholder="Write your phone number" name="phone" value={this.state.phone} required
                         id="phone" onChange={this.handleInputChange} />
                    </div>
                    
                    <div className="form-control buy-div">
                        <label className="buy-label">Your Message</label>
                        <textarea type="text" placeholder="Do you want this product" name="message" value={this.state.message} id="message"
                            onChange={this.handleInputChange} required></textarea>
                    </div>
                    
                    <div className="form-control buy-div-btn">
                        <button type="button" className="buy-btn" onClick={this.submitHandler}>Send message</button>
                    </div>
                   
                </form>

            </div>
        );
    }

}

export default BuyProduct

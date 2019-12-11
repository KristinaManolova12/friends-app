import React from "react";
import './Buy.css';
import productService from '../../services/messageService'
import validation from '../../shared/validation'

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
           successMessage: '',
           errors: {},
           errMessage: ''
        }
    }
    submitHandler = (e) => { 
        e.preventDefault()
        const data = this.state
        if (this.state.errors === '' && this.state.name !== '' && this.state.phone !== '' && this.state.message !== '') {
        productService.createMessage(data).then(() => {
            this.setState({message: '', name:'', phone: '', successMessage: 'Your message was sent successfully!' })
        });
    }else {
        this.setState({ errMessage: 'All inputs are required!' })
    }
    }
    handleInputChange(e) {
        let message = ''
        message = validation(e.target.name, e.target.value)
        let stateMessage = e.target.name + 'Error'
        if (message) {
            this.setState({
                [e.target.name]: e.target.value,
                errors: { [stateMessage]: message }
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value,
                errors: ''

            });
        }
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
                             {this.state.errors.nameError && <div className="error">Name should be at least 3 characters</div>}
                    </div>
                    
                    <div className="form-control buy-div">
                        <label className="buy-label">Phone Number</label>
                        <input type="number" placeholder="Write your phone number" name="phone" value={this.state.phone} required
                         id="phone" onChange={this.handleInputChange} />
                          {this.state.errors.phoneError && <div className="error">{this.state.errors.phoneError}</div>}
                    </div>
                    
                    <div className="form-control buy-div">
                        <label className="buy-label">Your Message</label>
                        <textarea type="text" placeholder="Do you want this product" name="message" value={this.state.message} id="message"
                            onChange={this.handleInputChange} required></textarea>
                             {this.state.errors.messageError && <div className="error">{this.state.errors.messageError}</div>}
                    </div>
                    
                    <div className="form-control buy-div-btn">
                    {this.state.errMessage && <div className="error">{this.state.errMessage}</div>}

                        <button type="button" className="buy-btn" onClick={this.submitHandler}>Send message</button>
                    </div>
                   
                </form>

            </div>
        );
    }

}

export default BuyProduct

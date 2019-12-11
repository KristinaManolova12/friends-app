import React from "react";
import "./CreateProduct.css";
import productService from '../../services/productService'
import validation from '../../shared/validation'
class CreateProduct extends React.Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productImg: '',
            result: '',
            errors: {}
        }
    }

    onFileChange(e) {
        this.setState({ productImg: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('productImg', this.state.productImg)
        debugger
        productService.uploadImage(formData)
            .then(res => {
                debugger
                const result = res.imageCreated
                this.setState({ productImg: result.productImg, result: result.productImg })
                debugger
            })
    }
    handleInputChange(e) {
        let message = ''
        message = validation(e.target.name, e.target.value)
        debugger
        let stateMessage = e.target.name + 'Error'
        if (message) {
            debugger
            this.setState({
                [e.target.name]: e.target.value,
                errors: { [stateMessage]: message }
            });
        } else {
            debugger
            this.setState({
                [e.target.name]: e.target.value,
                errors: ''
            });
        }
    }
    submitHandler = (e) => {
        debugger
        const data = this.state;
        debugger
        data.productImg = this.state.productImg
        e.preventDefault()
        if (this.state.errors === '' && this.state.result !== '' && this.state.name !=='' && this.state.description !=='' && this.state.price !=='') {
            productService.createProduct(data).then(() => {
                this.props.history.push('/shop');
            });
        } else {
            this.setState({ message: 'All inputs are required' })
        }

    }



    render() {

        const result = this.state.result
        return (
            <div className="create-product">
                <h2 className="createH">Hey you want to spread some joy! Come on ... show us what you have for us!</h2>

                <form className="create">

                    <div className="form-control create-div">
                        <label className="create-label">Name of product</label>
                        <input type="text" placeholder="T-shirt, cap, etc..." name="name" id="name"
                            onChange={this.handleInputChange} required />
                        {this.state.errors.nameError && <div className="error">{this.state.errors.nameError}</div>}

                    </div>

                    <div className="form-control create-div">
                        <label className="create-label">Description</label>
                        <textarea type="text" placeholder="Whrite some description" name="description" id="description"
                            onChange={this.handleInputChange} required></textarea>
                        {this.state.errors.descriptionError && <div className="error">{this.state.errors.descriptionError}</div>}

                    </div>

                    <div className="form-control create-div">
                        <label className="create-label">Price</label>
                        <input type="number" placeholder="what is the price" name="price" required id="price"
                            onChange={this.handleInputChange} />
                        {this.state.errors.priceError && <div className="error">{this.state.errors.priceError}</div>}

                    </div>
                    <div className="form-group create-div">
                        <input type="file" onChange={this.onFileChange} name='productImg' className="image-upload" required />
                        <button className="btn btn-primary" type="button" className="upload-btn" onClick={this.onSubmit}>Upload Image</button>
                        {this.state.message && <div className="error">{this.state.message}</div>}

                    </div>
                    {result ?
                        <img src={this.state.result} alt='img' className="image-to-upload" />
                        : null}
                    <div className="form-control create-div-btn">
                        <button type="button" className="create-btn" onClick={this.submitHandler}>Create</button>
                    </div>

                </form>

            </div>
        );
    }

}


export default CreateProduct

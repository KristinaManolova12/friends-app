import React from "react";
import "./CreateProduct.css";
import productService from '../../services/productService'
import validation from '../../shared/validation'
class EditProduct extends React.Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {
            productImg: '',
            result: '',
            name: '',
            description: '',
            price: '',
            productObj: '',
            errors: {}
        }
    }

    onFileChange(e) {
        this.setState({ productObj: e.target.files[0] })
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        productService.loadProduct(id).then(data => {
            const product = data

            this.setState({ name: product.name, productId: id, oldImage: product.productImg, description: product.description, price: product.price, productImg: product.productImg, id: product.author })

        });

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

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('productImg', this.state.productObj)
        productService.uploadImage(formData)
            .then(res => {
                const result = res.imageCreated
                this.setState({ productImg: result.productImg })
            })
        productService.getimg()
            .then(imgs =>
                this.setState({ result: imgs.img }))
    }

    submitHandler = (e) => {
        
        e.preventDefault();
        const data = this.state;
        
        data.productImg = this.state.productImg
        if (this.state.errors === '') {
            productService.updateProduct(data).then((res) => {
                
                this.props.history.push('/shop');
            });
        }
    }

    render() {

        return (

            <div className="create-product">
                <form className="create">

                    <div className="form-control create-div">
                        <label className="create-label">Name of product</label>
                        <input type="text" placeholder="T-shirt, cap, etc..." name="name" id="name"
                            onChange={this.handleInputChange} value={this.state.name} required />
                    </div>
                    {this.state.errors.nameError && <div className="error">{this.state.errors.nameError}</div>}
                    <div className="form-control create-div">
                        <label className="create-label">Description</label>
                        <textarea type="text" placeholder="Whrite some description" name="description" id="description"
                            onChange={this.handleInputChange} value={this.state.description} required></textarea>
                        {this.state.errors.descriptionError && <div className="error">{this.state.errors.descriptionError}</div>}

                    </div>

                    <div className="form-control create-div">
                        <label className="create-label">Price</label>
                        <input type="number" placeholder="what is the price" name="price" value={this.state.price}
                            required id="price" onChange={this.handleInputChange} />
                        {this.state.errors.priceError && <div className="error">{this.state.errors.priceError}</div>}

                    </div>
                    <div className="form-group">
                        <input type="file" onChange={this.onFileChange} name='productImg' className="image-upload up-input" required />
                        <button className="btn btn-primary" type="button" onClick={this.onSubmit} className="upload-btn up-btn">Upload</button>
                    </div>
                    <img src={this.state.productImg} alt='img' className="image-to-upload" />
                    <div className="form-control create-div-btn">
                        <button type="button" className="create-btn" onClick={this.submitHandler}>Update your product</button>
                    </div>


                </form>

            </div>
        );
    }

}
export default EditProduct

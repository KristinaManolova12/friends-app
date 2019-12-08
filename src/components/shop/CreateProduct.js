import React from "react";
import "./CreateProduct.css";
import * as yup from 'yup';
import inForm from '../../shared/hocs/inForm'
import productService from '../../services/productService'

class CreateProduct extends React.Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productImg: '',
            result: ''
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
                this.setState({ productImg: result.productImg, result: result.productImg})
                debugger
            })
    }


    nameOnChangeHandler = this.props.controlChangeHandlerFactory('name');
    descriptionOnChangeHandler = this.props.controlChangeHandlerFactory('description');
    priceOnChangeHandler = this.props.controlChangeHandlerFactory('price');



    submitHandler = (e) => {
        debugger
        e.preventDefault()

        const errors = this.props.getFormErrorState();
        if (errors) { return; }
        const data = this.props.getFormState();
        debugger
        data.productImg = this.state.productImg

        productService.createProduct(data).then(() => {
            this.props.history.push('/shop');
        });


    }


    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    };

    render() {
        const nameError = this.getFirstControlError('name');
        const descriptionError = this.getFirstControlError('description');
        const priceError = this.getFirstControlError('price');
        const result = this.state.result
        return (
            <div className="create-product">
                <h2 className="createH">Hey you want to spread some joy! Come on ... show us what you have for us!</h2>

                <form className="create">

                    <div className="form-control create-div">
                        <label className="create-label">Name of product</label>
                        <input type="text" placeholder="T-shirt, cap, etc..." name="name" id="name"
                            onChange={this.nameOnChangeHandler} required />
                    </div>
                    {nameError && <div className="error">{nameError}</div>}

                    <div className="form-control create-div">
                        <label className="create-label">Description</label>
                        <textarea type="text" placeholder="Whrite some description" name="description" id="description"
                            onChange={this.descriptionOnChangeHandler} required></textarea>
                    </div>
                    {descriptionError && <div className="error">{descriptionError}</div>}

                    <div className="form-control create-div">
                        <label className="create-label">Price</label>
                        <input type="number" placeholder="what is the price" name="price" required id="price" onChange={this.priceOnChangeHandler} />
                    </div>
                    {priceError && <div className="error">{priceError}</div>}
                    <div className="form-group create-div">
                        <input type="file" onChange={this.onFileChange} name='productImg' className="image-upload" required />
                        <button className="btn btn-primary" type="button" className="upload-btn" onClick={this.onSubmit}>Upload Image</button>
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
const initialFormState = {
    name: '',
    price: '',
    description: '',
    productImg: ''
};

const schema = yup.object({
    name: yup.string('Name shoud be a string')
        .required('Name is required')
        .min(4, 'Name should be more than 4 chars'),

    description: yup.string('Description must be a string')
        .required('Description is required')
        .min(4, 'Description must be more than 4 chars'),
    price: yup.string('Price must be a number')
        .required('Price is required'),
    productImg: yup.mixed().required('File required')
});


export default inForm(CreateProduct, initialFormState, schema)

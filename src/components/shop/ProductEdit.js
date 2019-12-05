import React from "react";
import "../../styles/CreateProduct.css";
import * as yup from 'yup';
import inForm from '../../shared/hocs/inForm'
import productService from '../../services/productService'

class EditProduct extends React.Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: '',
            result: '',
            name: '',
            description:'',
            price:''
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        
        productService.loadProduct(id).then(data => {
            const product = data
           
            this.setState({ name: product.name, description: product.description, price: product.price, productImg: product.productImg, id: product.author })
           
        });

    }
    

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        debugger
        productService.uploadImage(formData)
            .then(res => {
                debugger
                const result = res.imageCreated
                this.setState({ productImg: result.profileImg })
                debugger
            })
        productService.getimg()
            .then(imgs =>
                this.setState({ result: imgs.img }))
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
        const productImgError = this.getFirstControlError('productImg');
        
        return (
           
            <div className="create-product">
                <form className="create">

                    <div className="form-control create-div">
                        <label className="create-label">Name of product</label>
                        <input type="text" placeholder="T-shirt, cap, etc..." name="name" id="name"
                            onChange={this.nameOnChangeHandler} value={this.state.name} required />
                    </div>
                    {nameError && <div className="error">{nameError}</div>}

                    <div className="form-control create-div">
                        <label className="create-label">Description</label>
                        <textarea type="text" placeholder="Whrite some description" name="description" id="description"
                            onChange={this.descriptionOnChangeHandler} value={this.state.description} required></textarea>
                    </div>
                    {descriptionError && <div className="error">{descriptionError}</div>}

                    <div className="form-control create-div">
                        <label className="create-label">Price</label>
                        <input type="number" placeholder="what is the price" name="price" value={this.state.price} required id="price" onChange={this.priceOnChangeHandler} />
                    </div>
                    {priceError && <div className="error">{priceError}</div>}
                    <div className="form-group">
                        <input type="file" onChange={this.onFileChange} name='productImg' required />


                        <button className="btn btn-primary" type="button" onClick={this.onSubmit}>Upload</button>
                    </div>
                    <div className="form-control create-div-btn">
                        <button type="button" className="create-btn" onClick={this.submitHandler}>Create</button>
                    </div>
                    <p>{this.state.result}</p>
                    <img src={this.state.productImg} alt='img' />

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
// export default EditProduct

export default inForm(EditProduct, initialFormState, schema)

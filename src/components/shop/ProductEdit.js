import React from "react";
import "./CreateProduct.css";
import * as yup from 'yup';
import inForm from '../../shared/hocs/inForm'
import productService from '../../services/productService'

class EditProduct extends React.Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange= this.handleInputChange.bind(this)
        this.state = {
            productImg: '',
            result: '',
            name: '',
            description:'',
            price:'',
            productObj: ''
        }
    }

    onFileChange(e) {
        this.setState({ productObj: e.target.files[0] })
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        
        productService.loadProduct(id).then(data => {
            const product = data
           
            this.setState({ name: product.name,productId:id,oldImage:product.productImg, description: product.description, price: product.price, productImg: product.productImg, id: product.author })
           
        });

    }
    handleInputChange(e) {
        if (e.target.value.length < 1) {
            return this.setState({errors: `${[e.target.name]} should be more than 4 letters`})
        }
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('productImg', this.state.productObj)
        debugger
        productService.uploadImage(formData)
            .then(res => {
                debugger
                const result = res.imageCreated
                this.setState({ productImg: result.productImg })
                debugger
            })
        productService.getimg()
            .then(imgs =>
                this.setState({ result: imgs.img }))
    }

    submitHandler = (e) => {
        debugger
        e.preventDefault();
        const data = this.state;
        debugger
        data.productImg = this.state.productImg
        productService.updateProduct(data).then((res) => {
            debugger
            this.props.history.push('/shop');
        });

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
                   

                    <div className="form-control create-div">
                        <label className="create-label">Description</label>
                        <textarea type="text" placeholder="Whrite some description" name="description" id="description"
                            onChange={this.handleInputChange} value={this.state.description} required></textarea>
                    </div>
                    {/* {descriptionError && <div className="error">{descriptionError}</div>} */}

                    <div className="form-control create-div">
                        <label className="create-label">Price</label>
                        <input type="number" placeholder="what is the price" name="price" value={this.state.price} 
                        required id="price" onChange={this.handleInputChange} />
                    </div>
                    {/* {priceError && <div className="error">{priceError}</div>} */}
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

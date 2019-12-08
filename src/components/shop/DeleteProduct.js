import productService from '../../services/productService';

function DeleteProduct(props) {
    
    const id = props.match.params.id
    productService.deleteProduct(id)
    .then(res =>  props.history.push('/shop'))

    return null;
}
export default DeleteProduct
import messageService from '../../services/messageService';

function DeleteMessage(props) {
    
    const id = props.match.params.id
    messageService.deleteMessage(id)
    .then(res =>  props.history.push('/my-messages'))

    return null;
}
export default DeleteMessage
import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import messageService from '../../services/messageService';
class MessagesTable extends React.Component {
  constructor(props) {
    super(props);

    this.readOnClick = this.readOnClick.bind(this);

    this.state = {
      isRead: this.props.isRead,

    }

  }
  readOnClick() {
    let data = {
      isRead: this.state.isRead,
      id: this.props.id
    }
    if (!this.state.isRead) {
      data = {
        isRead: true,
        id: this.props.id
      }
      this.setState({ isRead: true })
    } else {
      data = {
        isRead: false,
        id: this.props.id
      }
      this.setState({ isRead: false })
    }

    messageService.editMessage(data)
      .then(res => {
        return <Redirect to='/my-message' />
      })
  }
  render() {
    return (

      <tr className={!this.state.isRead ? 'isRead tr' : 'tr'}>
        <td className="img-td td"><img src={this.props.productImg} alt='img' className="img-table" /></td>
        <td className="td">{this.props.productName}</td>
        <td className="td">{this.props.productPrice.toFixed(2)}</td>
        <td className="td">{this.props.userName}</td>
        <td className="td">{this.props.phone}</td>
        <td className="td">{this.props.message}</td>
        <td className="td">{this.props.date}</td>
        <td className="td cllll"><button className="readButton" onClick={this.readOnClick}>{this.state.isRead ? 'Mark as unread' : 'Mark as read'}</button></td>
        <td className="td"> <Link to={`/message/delete/${this.props.id}`} className="linkMess">Delete</Link></td>
      </tr>

    )
  };

}

export default MessagesTable
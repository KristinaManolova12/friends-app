import React from 'react'
import './Profile.css'
import './Messages.css'
import messageService from '../../services/messageService'
import NavProfile from './Nav-Profile'
import MessagesTable from './MessagesTable'
import notfound from '../../images/NotFound.gif'
class MyMessages extends React.Component {
  state = {
    mymessage: ''
  };

  componentDidMount() {
    const userId = this.props.userId;
    console.log(userId);
    debugger
    messageService.loadAllMessages().then(messages => {
      debugger
      console.log(messages);

      const mymessage = messages.filter(e =>
        e.productAuthorId === userId
      )
      console.log(mymessage);
      
      this.setState({ mymessage });
    });
  }
  render() {
    console.log(this.state)
debugger
    const {mymessage}= this.state;
    
    const isLogged = this.props.isLogged
    return (
      <div>
      {isLogged &&  <div className='shop'>
        <NavProfile />
        {mymessage.length >0 ?
        <table>
          <tbody>
          <tr className="tr">
            <th className="td">Product Image</th>
            <th className="td">Product Name</th>
            <th className="td">Product Price</th>
            <th className="td">Name</th>
            <th className="td">Phone</th>
            <th className="td">Message</th>
            <th className="td">Date</th>

          </tr>
          {mymessage.map((message)=>
           <MessagesTable key={message._id} 
           productImg={message.products[0].productImg} 
           productName={message.products[0].name}
           productPrice= {message.products[0].price}
           userName={message.name}
           phone={message.phone}
           message={message.message}
           date={message.date.slice(0,10)}
           id={message._id}
          />  
          )}
         </tbody>
        </table> : <div className="message-error">
         
         <p className="message-p">Sorry... No messages today</p> 
          <img src={notfound} alt="img" className="no-message"></img>
          </div>}
      </div>}
      </div>
    )
  }
}


export default MyMessages
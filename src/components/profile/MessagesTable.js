import React from 'react'
import { Link } from 'react-router-dom'
function MessagesTable(props) {
    return (
        <tr className="tr">
          <td className="img-td td"><img src={props.productImg} alt ='img' className="img-table"/></td>
            <td className="td">{props.productName}</td>
          <td className="td">{props.productPrice}</td>
    <td className="td">{props.userName}</td>
    <td className="td">{props.phone}</td>
    <td className="td">{props.message}</td>
    <td className="td">{props.date}</td>
    <td className="td"> <Link to={`/message/delete/${props.id}`} className="product-btn">Delete</Link></td>
        </tr>
       
        
    );
    
}

export default MessagesTable
import React from 'react';
import notFound from '../images/NotFound.gif'
import '../styles/NotFound.css'
function NotFound(props) {
   
    return (
        <div className='notFound'>
            <img src={notFound} className="notfound-img" alt="Not Found"/>
            <h3 className="notfoundH">OoOops ... Something happend?! Sorry, the page you are looking for is not found!</h3>
        </div>
    );
}

export default NotFound
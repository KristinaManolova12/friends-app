import React from 'react'
import reachel from '../images/reachel.gif';
import joye from '../images/joye.gif';
import monica from '../images/monica.gif'
import ross from '../images/ross.gif'
import chandler from '../images/chandler.gif'
import phoebe from '../images/phoebe.gif'
import { Link } from 'react-router-dom'
function Logged(props) {

    const favorite = props.favorite;

    let message = '';
    let imgUrl= '';
    if (favorite === 'joye') {
        message = "Heyy Joye, How you doin?"
        imgUrl = joye
    }else if (favorite === 'monica'){
        message = "Heyy Mon, did you clean up already?"
        imgUrl= monica
    }else if (favorite === 'rachel'){
        message = "Heyy Rachel, have you conquer fashion world today?"
        imgUrl=reachel
    }else if (favorite === 'ross'){
        message = "Heyy Ross, any divorce today?"
        imgUrl=ross
    }else if (favorite === 'chandler'){
        message = "Heyy Chandler, have you been sarcastic today?"
        imgUrl = chandler
    }else if (favorite === 'phoebe'){
        message = "Heyy Phoebe, how is the smelly cat?"
        imgUrl=phoebe
    }
    return (
        <div className="logged-div">
            <img src={imgUrl} alt="img" className="logged-img"/>
            <div className="logged-text">
            <h3 className="logged-h">{message}</h3>

            <p>Come, let's see what is new in our <Link to="/shop" className="link">SHOP</Link>...</p>
            <p>Or you want to <Link to="/create-product" className="link">OFFER</Link> us something new?</p>
            </div>
        </div>

    );
}
export default Logged
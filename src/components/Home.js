import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import aboutfriends from '../images/aboutfriends.jpg'
import share from '../images/share.jpg'
import shop from '../images/shop.jpg'
import Logged from './Logged'
class Home extends React.Component {
    
    render() {
        const favorite = this.props.favorite;
        const isLogged = this.props.isLogged;
        return (
            
            <div className='divPage'>
                {!isLogged ?
                <div>
                <h3>Hello F.R.I.E.N.D.S fan!</h3>
                <br/>
               <p> You have found your place in internet world. Here you will find all happines that you need.
                
                With us you can:</p>
                <article className="article">
                
                <img src={shop} className='home-img left' alt='friends'></img>
                <p className="article-p">
                Forget your problems, and go on a place where everything is about <Link to="/funZone" className="link">F.R.I.E.N.D.S</Link>
                </p>
                </article>
                <article className="article">
                <p className="article-p">Sell some Friends stuff in our, like clothes, games, cups, ect... Make someone happy with your offer.</p>
                <img src={share} className='home-img right' alt='information'></img>
                
                </article>
                
                <article className="article">
                
                <img src={aboutfriends} className='home-img left' alt='shop'></img>
                <p className="article-p">
                Fill your F.R.I.E.N.D.S collection... Check out our <Link to="/shop" className="link">SHOP</Link> .
                </p>
                </article>
                </div> : <Logged favorite={favorite}/>
    }
            </div>
        )
    }
}

export default Home
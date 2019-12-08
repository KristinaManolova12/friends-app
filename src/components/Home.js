import React from 'react'
import '../styles/Home.css'
import aboutfriends from '../images/aboutfriends.jpg'
import share from '../images/share.jpg'
import shop from '../images/shop.jpg'
import Logged from './Logged'
class Home extends React.Component {
    constructor(props) {
        super(props);
        
    }

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
                Forget yuor problems, and go on a place where everything is about F.R.I.E.N.D.S
                </p>
                </article>
                <article className="article">
                <p className="article-p">Sell some Friends staff, like clothes, games, cups, ect... Make someone happy with your OFFER.</p>
                <img src={share} className='home-img right' alt='information'></img>
                
                </article>
                
                <article className="article">
                
                <img src={aboutfriends} className='home-img left' alt='shop'></img>
                <p className="article-p">
                Fill your F.R.I.E.N.D.S collection... Check out our SHOP.
                </p>
                </article>
                </div> : <Logged favorite={favorite}/>
            }
            </div>
        )
    }
}

export default Home
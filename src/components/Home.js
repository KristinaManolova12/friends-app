import React from 'react'
import '../styles/Home.css'
// import '../App.css'
//  import friends from './friends.jpg'
import aboutfriends from '../images/aboutfriends.jpg'
import share from '../images/share.jpg'
import shop from '../images/shop.jpg'
class Home extends React.Component {
    render() {
        return (
            <div className='divPage'>
                Hello F.R.I.E.N.D.S fan!
                You have found your place in internet world. Here you will find all happines that you need.
                
                With us you can:
                <article className="article">
                
                <img src={aboutfriends} className='home-img left' alt='friends'></img>
                <p className="article-p">
                Share your toughts, wishes and F.R.I.E.N.D.S things.
                </p>
                </article>
                <article className="article">
                <p className="article-p">Find spicy information about your favorite character.</p>
                <img src={share} className='home-img right' alt='information'></img>
                
                </article>
                
                <article className="article">
                
                <img src={shop} className='home-img left' alt='shop'></img>
                <p className="article-p">
                Fill your F.R.I.E.N.D.S collection... Check out our Shop.
                </p>
                </article>
             
            </div>
        )
    }
}

export default Home
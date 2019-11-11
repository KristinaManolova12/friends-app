import React from 'react'
import './homePage.css'
// import friends from './friends.jpg'
import aboutfriends from './aboutfriends.jpg'
import share from './share.jpg'
import shop from './shop.jpg'
class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                Hello F.R.I.E.N.D.S fan!
                You have found your place in internet world. Here you will find all happines that you need.
                
                With us you can:
                <article>
                <p>
                <img src={aboutfriends} className='img left' alt='friends'></img>
                Share your toughts, wishes and F.R.I.E.N.D.S things.
                </p>
                </article>
                <article>
                <p>Find spicy information about your favorite character.
                <img src={share} className='img right' alt='information'></img>
                </p>
                </article>
                
                <article>
                <p>
                <img src={shop} className='img left' alt='shop'></img>
                Fill your F.R.I.E.N.D.S collection... Check out our Shop.
                </p>
                </article>
             
            </div>
        )
    }
}

export default Home
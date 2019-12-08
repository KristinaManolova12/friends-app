import { Link } from 'react-router-dom'
import React from 'react'
import './Profile.css'
function NavProfile(props) {
    return (
        <div className="nav-div">
        <ul className="profil-nav">
            <li className="profil-nav-li">  
                <Link to="/profile-products" className="profil-nav-link">My Products</Link>

            </li>
            <li className="profil-nav-li">
                <Link to="/my-messages" className="profil-nav-link">My Messages</Link>
            </li>

        </ul>
        </div>
    )
}

export default NavProfile
import { Link } from 'react-router-dom'
import React from 'react'
import '../profile/Profile.css'
function NavZone(props) {
    return (
        <div className="nav-div">
        <ul className="profil-nav">
            <li className="profil-nav-li">  
                <Link to="/funZone" className="profil-nav-link">Bloopers</Link>

            </li>
            <li className="profil-nav-li">
                <Link to="/interviews" className="profil-nav-link">Interviews with casts</Link>
            </li>

        </ul>
        </div>
    )
}

export default NavZone
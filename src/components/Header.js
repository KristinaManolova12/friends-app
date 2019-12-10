import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter, Redirect } from 'react-router'
import logo from '../images/friends-logo-png-transparent.png'
import '../styles/header.css'
import friends from '../images/729344.jpg';

function Header({ isLogged }) {

  return (

    <nav className='nav'>
      <img className="logo" src={logo} alt='Logo' />
      <span><img src={friends} alt="Friends" className="image-friends" /> </span>

      <ul id="nav-links">
        <li><Link to="/">H.o.m.e</Link></li>

        <li> <Link to="/shop" className="dropdown">S.h.o.p</Link></li>
        <li><Link to="/funZone">F.u.n Z.o.n.e</Link></li>


        {isLogged && <li><Link to="/profile">Profile</Link></li> }
        {isLogged && <li> <Link to="/logout">L.o.g.o.u.t</Link></li>}

        {!isLogged && <li> <Link to="/login">L.o.g.i.n</Link></li>}
        {!isLogged && <li> <Link to="/register">J.o.i.n U.s</Link></li>}

      </ul>

    </nav >
  )
}


export default withRouter(Header)
import React from 'react'
import logo from './friends-logo-png-transparent.png'
import './navbar.css';
import Home from '../homePage/homePage'
import Greeting from '../navBar/greetings'
<<<<<<< Updated upstream
import About from '../aboutPage/aboutPage';
=======
>>>>>>> Stashed changes
import Login from '../user/loginPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
<<<<<<< Updated upstream
import Shop from '../shop/shop'
=======
import ProductList from '../shop/product-state'
>>>>>>> Stashed changes
class Navbar extends React.Component {
  
  render() {
    return (
      
      <Router>
      <div className='nav'>
        <img src={logo} alt='Logo' />
        <ul id="nav">
<<<<<<< Updated upstream
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Who are we</Link></li>
          <Greeting isLoggedIn={false}/>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
=======
          <li><Link to="/">H.o.m.e</Link></li>
          <Greeting isLoggedIn={false}/>
          <li><Link to="/shop">S.h.o.p</Link></li>
        </ul>
      </div>
      <Switch>
        
>>>>>>> Stashed changes
        <Route path="/login">
          <Login />
        </Route>
                
        
        <Route path="/shop">
<<<<<<< Updated upstream
          <Shop />
=======
          <ProductList />
>>>>>>> Stashed changes
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    )

  }
}
export default Navbar
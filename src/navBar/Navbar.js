import React from 'react'
import logo from './friends-logo-png-transparent.png'
import './navbar.css';
import Home from '../homePage/homePage'
import Greeting from '../navBar/greetings'
import About from '../aboutPage/aboutPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <img src={logo} alt='Logo' />
          <ul id="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Who are we</Link></li>
            <Greeting isLoggedIn={false}/>
            
          </ul>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default Navbar
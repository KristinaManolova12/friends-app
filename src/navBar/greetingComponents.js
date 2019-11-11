import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Register from '../user/registerPage';
import Login from '../user/loginPage'
import Logout from '../user/logout'
import Profile from '../user/profile'
// import IsAdmin from './isAdmin'

class UserGreeting extends React.Component {
    
    render() {
        return (
            <Router>
                <li><Link to="/profile">Welcome, {this.props.username}!</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                {/* <IsAdmin isAdmin={false} /> */}
                <Switch>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/logout">
                        <Logout />
                    </Route>

                </Switch>
            </Router>
        )
    };
}
class GuestGreeting extends React.Component {
   
    render() {
        return (
            
               <span> <li><Link to="/login">Login</Link></li>
               <li><Link to="/register">Join Us</Link></li></span>
               
            
        )
    }
}


export default { UserGreeting, GuestGreeting }

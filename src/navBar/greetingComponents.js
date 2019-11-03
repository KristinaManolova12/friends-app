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
class UserGreeting extends React.Component {
    
    render() {
        return (
            <Router>
                <li><Link to="/profile">Welcome, {this.props.username}!</Link></li>
                <li><Link to="/logout">Logout</Link></li>

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
            <Router>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Join Us</Link></li>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Router>
        )
    }
}


export default { UserGreeting, GuestGreeting }

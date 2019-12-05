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
<<<<<<< Updated upstream
                <li><Link to="/logout">Logout</Link></li>
                {/* <IsAdmin isAdmin={false} /> */}
=======
                <li><Link to="/logout">L.o.g.o.u.t</Link></li>
                
>>>>>>> Stashed changes
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
            
<<<<<<< Updated upstream
               <span> <li><Link to="/login">Login</Link></li>
               <li><Link to="/register">Join Us</Link></li></span>
=======
               <span> <li><Link to="/login">L.o.g.i.n</Link></li>
               <li><Link to="/register">J.o.i.n U.s</Link></li></span>
>>>>>>> Stashed changes
               
            
        )
    }
}


export default { UserGreeting, GuestGreeting }

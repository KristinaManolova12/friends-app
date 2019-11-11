import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Orders from '../administration/orders'
import Articles from '../administration/articles'

class IsAdminFunc extends React.Component {
    render() {
        return (
    <Router>
    <li><Link to="/orders">Orders</Link></li>
    <li><Link to="/articles">Articles</Link></li>

    <Switch>
        <Route path="/orders">
            <Orders />
        </Route>
        <Route path="/articles">
            <Articles />
        </Route>

    </Switch>
</Router>
        )
    }
}

export default IsAdminFunc
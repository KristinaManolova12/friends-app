import React from 'react';
import '../styles/App.css';
import Header from './Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Product from './shop/Shop';
import Login from './Login';
import Home from './Home';
import Footer from './Footer';
import Register from './Register';
import Profile from './profile/Profile';
import Logout from './Logout';
import FunZone from './FunZone';
import ProductEdit from './shop/ProductEdit';
import NotFound from './NotFound';
import CreateProduct from './CreateProduct';
import userService from '../services/user-service';
import Main from './Main';
import ProductDetails from './shop/Product';
import {userContext} from './UserContext';

function render(Cmp, otherProps) {
  return function (props) {
    return (
      <Main >

        <Cmp {...props} {...otherProps} />
      </Main>

    )
  };
}

function parseCookeis() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const cookies = parseCookeis();
    const isLogged = !!cookies['x-auth-token'];
    const errors = '';
    const message = '';
    const userId= localStorage.getItem('userId');
    

    this.state = { isLogged, message, userId, user: {} };
  }

  logout = (history) => {
    localStorage.removeItem('userId');
    userService.logout().then(() => {
      this.setState({ isLogged: false, userId: '' });
     
      history.push('/');
      return null;
    });
  }

  login = (history, data) => {
    userService.login(data)
      .then((data) => {

        if (data.status > 200) {
          this.setState({ isLogged: false, message: 'Invalid username or password' });
        } else {
          const id = data._id;

          localStorage.setItem('userId', id );

          this.setState({ isLogged: true, userId: id, errors: '', message: '' });
          history.push('/');
          
        }
      });
  }
  render() {
    const { isLogged, errors, message, userId } = this.state;
    return (
<userContext.Provider value={this.state}>
      <BrowserRouter>
        <div className="App">
          <Header isLogged={isLogged} />
          <div className="body">
            <Switch>

              <Route exact path="/login" render={render(Login, { isLogged, errors, login: this.login, message })} />
              <Route exact path="/shop" render={render(Product, { isLogged })} />
              <Route exact path="/" component={Home} />
              <Route exact path="/register" render={render(Register, { isLogged })} />
              {/* <Route exact path="/register" component ={Register}/> */}
              <Route exact path="/funzone" component={FunZone} />
              <Route exact path="/profile" render={render(Profile, { userId, isLogged, logout: this.logout, })} />
              <Route exact path="/product/edit/:id" render={render(ProductEdit, { userId, isLogged, logout: this.logout })} />
              <Route exact path="/logout" render={render(Logout, { isLogged, logout: this.logout })} />
              <Route exact path="/create-product" component={CreateProduct} />
              <Route exact path="/product/:id" render={render(ProductDetails, { isLogged, logout: this.logout, userId })} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
          
          <Footer />

        </div>
      </BrowserRouter>
      </userContext.Provider>
    );
  }
}

export default App;

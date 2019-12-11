import React from 'react';
import '../styles/App.css';
import Header from './common/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Product from './shop/Shop';
import Login from './user/Login';
import Home from './Home';
import Footer from './common/Footer';
import Register from './user/Register';
import Profile from './profile/Profile';
import Logout from './user/Logout';
import FunZone from './funZone/FunZone';
import ProductEdit from './shop/ProductEdit';
import NotFound from './common/NotFound';
import CreateProduct from './shop/CreateProduct';
import userService from '../services/user-service';
import Main from './Main';
import ProductDetails from './shop/Product';
import DeleteProduct from './shop/DeleteProduct';
import ProfileProducts from './profile/ProfileProduct'
import MyMessages from './profile/MyMessages';
import BuyProduct from './profile/Buy'
import DeleteMessage from './profile/DeleteMessage';
import Interviews from './funZone/Interviews';

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
    const message = '';
    const userId= localStorage.getItem('userId');
    const favorite = localStorage.getItem('favorite')

    this.state = { isLogged, message, userId, user: {},favorite };
  }

  logout = (history) => {
    localStorage.removeItem('favorite');
    localStorage.removeItem('userId');
    userService.logout().then(() => {
      this.setState({ isLogged: false, userId: '',favorite:'' });
     
      history.push('/');
      return null;
    });
  }

  login = (history, data) => {
    userService.login(data)
      .then((data) => {
        debugger
        if (data.status > 200) {
          this.setState({ isLogged: false, message: 'Invalid username or password' });
        } else {
          const id = data._id;
          const favorite = data.favorite
          localStorage.setItem('userId', id );
          localStorage.setItem('favorite', favorite );
          this.setState({ isLogged: true, userId: id,favorite:favorite, errors: '', message: '' });
          history.push('/');
          
        }
      });
  }
  render() {
    const { isLogged, errors, message, userId,favorite } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Header isLogged={isLogged} />
          <div className="body">
            <Switch>

              <Route exact path="/login" render={render(Login, { isLogged, errors, login: this.login, message })} />
              <Route exact path="/shop" render={render(Product, { isLogged })} />
              <Route exact path="/" render={render(Home, { isLogged, favorite })}  />
              <Route exact path="/register" render={render(Register, { isLogged })} />
              {isLogged && <Route exact path="/profile-products" render={render(ProfileProducts, { userId, isLogged, logout: this.logout, })} />}
              {isLogged && <Route exact path="/my-messages" render={render(MyMessages, { userId, isLogged, logout: this.logout, })} />}
              
              {isLogged &&  <Route exact path="/message/delete/:id" component={DeleteMessage} />}
              <Route exact path="/funzone" component={FunZone} />
              {isLogged && <Route exact path="/product/delete/:id" component={DeleteProduct} />}
             <Route exact path="/interviews" component={Interviews} />
             {isLogged && <Route exact path="/profile" render={render(Profile, { userId, isLogged, logout: this.logout, })} />}
             {isLogged &&<Route exact path="/product/edit/:id" render={render(ProductEdit, { userId, isLogged, logout: this.logout })} />}
              <Route exact path="/logout" render={render(Logout, { isLogged, logout: this.logout })} />
              {isLogged && <Route exact path="/product/buy/:id" render={render(BuyProduct, { isLogged, logout: this.logout })} />}
             {isLogged && <Route exact path="/create-product" component={CreateProduct} />}
             {isLogged && <Route exact path="/product/:id" render={render(ProductDetails, { isLogged, logout: this.logout, userId })} />}
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
          
          <Footer />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

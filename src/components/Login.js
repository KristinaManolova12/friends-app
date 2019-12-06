import React from "react";
import userService from '../services/user-service'
import "../styles/Login-Register.css";
import friendsIntro from "../images/friendsIntro.gif"
import inForm from '../shared/hocs/inForm'
import * as yup from 'yup';

class Login extends React.Component {
  usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
  passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
  
  submitHandler = () => {
    const errors = this.props.getFormErrorState();
    if (!!errors) { return ; }
    const data = this.props.getFormState();
   
    this.props.login(this.props.history, data);
   
  }
 
  getFirstControlError = name => {
    const errorState = this.props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  };
  render() {
    const usernameError = this.getFirstControlError('username');
    const passwordError = this.getFirstControlError('password');
    const message = this.props.message
    return (
     
      <div className="Login-register">
         
        <h3 className="login-registerH">Hey F.r.i.e.n.d.s Fan, welcome back! We have been waiting for you. Come on Login and let's see what is new!</h3>
        <img src={friendsIntro} className="intro-gif" alt="Login Gif"/>
       
        <form>
        
          <div className="form-control login-register-label">
            <label>Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username..." onChange={this.usernameOnChangeHandler} />
            {usernameError && <div className="error">{usernameError}</div>}
          </div>
          <div className="form-control">
            <label>Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password..." onChange={this.passwordOnChangeHandler} />
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          
          {message && <div className="error">{message}</div>}
          <div className="form-control">
            <button type="button" onClick={this.submitHandler} className="login-registerBtn">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
const initialFormState = {
  username: '',
  password: ''
};

const schema = yup.object({
  username: yup.string('Username shoud be a string')
      .required('Username is required')
      .min(4, 'Username should be more than 4 chars'),

  password: yup.string('Password must be a string')
      .required('Password is required')
      .min(4, 'Password must be more than 4 chars'),

});


export default inForm(Login, {
  username: '',
  password: ''
}, schema)
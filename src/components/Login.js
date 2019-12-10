import React from "react";
import "../styles/Login-Register.css";
import friendsIntro from "../images/friendsIntro.gif"
import inForm from '../shared/hocs/inForm'
import * as yup from 'yup';
import validation from '../shared/validation'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.submitHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)

    this.state = {
      username: '',
      password: '',
      errors: {}
    }
  }
  handleInputChange(e) {
    let message = ''
    message = validation(e.target.name, e.target.value)
    debugger
    let stateMessage = e.target.name + 'Error'
    if (message) {
      debugger
      this.setState({
        [e.target.name]: e.target.value,
        errors: { [stateMessage]: message }
      });
    } else {
      debugger
      this.setState({
        [e.target.name]: e.target.value,
        errors: ''
      });
    }
  }

  submitHandler = () => {

    const data = this.state

    this.props.login(this.props.history, data);

  }

  render() {

    const message = this.props.message
    return (

      <div className="Login-register">

        <h3 className="login-registerH">Hey F.r.i.e.n.d.s Fan, welcome back! We have been waiting for you. Come on Login and let's see what is new!</h3>
        <img src={friendsIntro} className="intro-gif" alt="Login Gif" />

        <form>

          <div className="form-control login-register-label">
            <label>Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username..."
              onChange={this.handleInputChange} />
            {this.state.errors.usernameError && <div className="error">{this.state.errors.usernameError}</div>}
          </div>
          <div className="form-control">
            <label>Password</label>
            <input type="password" id="password" name="password"
              placeholder="Enter your password..." onChange={this.handleInputChange} />
            {this.state.errors.passwordError && <div className="error">{this.state.errors.passwordError}</div>}
            {message && <div className="error">{message}</div>}
          </div>

         
          <div className="form-control">
            <button type="button" onClick={this.submitHandler} className="login-registerBtn">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

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
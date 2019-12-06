import React from "react";
import * as yup from 'yup';
import "../styles/Login-Register.css";
import inForm from '../shared/hocs/inForm'
import friendsRegisterGIf from '../images/friendsRegisterGif.gif'
import userService from '../services/user-service'

class Register extends React.Component {
    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
    repeatPasswordOnChangeHandler = this.props.controlChangeHandlerFactory('repeatPassword');


    submitHandler = () => {
        const errors = this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        userService.register(data).then(() => {
            this.props.history.push('/login');
        });
    }
    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    };
    render() {
        const usernameError = this.getFirstControlError('username');
        const passwordError = this.getFirstControlError('password');
        const repeatPasswordError = this.getFirstControlError('repeatPassword');
        return (

            <div className="Login-register" >
                <h2 className="login-registerH">Hello, F.r.i.e.n.d.s fan, join in our world, where every problem and stress are gone. Just register and see what we have for you!</h2>
                <img src={friendsRegisterGIf} className="intro-gif-register" alt="Register Gif"/>
                <form className="register">

                    <div className="form-control login-register-label register-label">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Username" name="username" id="username"
                            onChange={this.usernameOnChangeHandler} />
                        {usernameError && <div className="error">{usernameError}</div>}
                    </div>
                    <div className="form-control">
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" id="password" onChange={this.passwordOnChangeHandler} />
                        {passwordError && <div className="error">{passwordError}</div>}
                    </div>

                    <div className="form-control ">
                        <label><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="repeatPassword" id="password-repeat"
                            onChange={this.repeatPasswordOnChangeHandler} />
                        {repeatPasswordError && <div className="error">{repeatPasswordError}</div>}
                    </div>

                    <div className="form-control register-btn">
                        <button type="button" onClick={this.submitHandler} className="login-registerBtn">Register</button>
                    </div>
                </form>
            </div>
        );
    }

}
const initialFormState = {
    username: '',
    password: '',
    repeatPassword: ''
};

const schema = yup.object({
    username: yup.string('Username shoud be a string')
        .required('Username is required')
        .min(4, 'Username should be more than 4 chars'),

    password: yup.string('Password must be a string')
        .required('Password is required')
        .min(4, 'Password must be more than 4 chars'),

        repeatPassword: yup.string('Password must be a string')
        // .oneOf([yup.ref('password'), ''], 'Passwords don\'t match')
        // .required('Password is required')
        // .min(4, 'Password must be more than 4 chars')
});


export default inForm(Register, initialFormState, schema)
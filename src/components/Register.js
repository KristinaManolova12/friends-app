import React from "react";
import * as yup from 'yup';
import "../styles/Login-Register.css";
import inForm from '../shared/hocs/inForm'
import friendsRegisterGIf from '../images/friendsRegisterGif.gif'
import userService from '../services/user-service'

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.submitHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            value: 'rachel'
        }
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitHandler = () => {
        const data = this.state
        debugger
        console.log(data);

        userService.register(data).then((res) => {
            debugger
            if (res.error) {

                console.log(res.error);

            }
            this.props.history.push('/login');
        });
    }

    render() {

        return (

            <div className="Login-register" >
                <h2 className="login-registerH">Hello, F.r.i.e.n.d.s fan, join in our world, where every problem and stress are gone. Just register and see what we have for you!</h2>
                <img src={friendsRegisterGIf} className="intro-gif-register" alt="Register Gif" />
                <form className="register">

                    <div className="form-control login-register-label register-label">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Username" name="username" id="username"
                            onChange={this.handleInputChange} />
                        {/* {usernameError && <div className="error">{usernameError}</div>} */}
                    </div>
                    <div className="form-control ">
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" id="password" onChange={this.handleInputChange} />
                        {/* {passwordError && <div className="error">{passwordError}</div>} */}
                    </div>

                    <div className="form-control ">
                        <label><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="repeatPassword" id="password-repeat"
                            onChange={this.handleInputChange} />
                        {/* {repeatPasswordError && <div className="error">{repeatPasswordError}</div>} */}
                    </div>
                    <label className="favorite-label form-control">
                        Pick your favorite actor:
          <select value={this.state.value} className="select" onChange={this.handleChange}>
                            <option value="rachel">Rachel</option>
                            <option value="ross">Ross</option>
                            <option value="chandler">Chandler</option>
                            <option value="monica">Monica</option>
                            <option value="joye">Joye</option>
                            <option value="phoebe">Phoebe</option>
                        </select>
                    </label>
                    <div className="form-control">
                        <button type="button" onClick={this.submitHandler} className="login-registerBtn register-btn">Register</button>
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
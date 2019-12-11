import React from "react";
import "./Login-Register.css";
import friendsRegisterGIf from '../../images/friendsRegisterGif.gif'
import userService from '../../services/user-service'
import validation from '../../shared/validation'

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
            value: 'rachel',
            errors: {}
        }
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    
    handleInputChange(e) {
        let message=''
        this.setState({
            rePassMessage: ''
       });
        message = validation(e.target.name,e.target.value)
        debugger
        let stateMessage= e.target.name +'Error'
        if (message) {
            debugger
            
            this.setState({
                [e.target.name]: e.target.value,
                errors: {[stateMessage]:message}
           });
        }else{
            debugger
        this.setState({
             [e.target.name]: e.target.value,
             errors: ''
        
        });
    }
    }
    submitHandler = () => {
        const data = this.state
        
        if (this.state.errors === '' && this.state.password === this.state.repeatPassword && this.state.username !== '' && this.state.password !== '' ) {
            userService.register(data).then((res) => {
            
                if (res.status> 200) {
                   this.setState({mongoerror: `Sorry, but username ${this.state.username} is taken`})
                }else {
                    this.setState({mongoerror: ''})
                this.props.history.push('/login');
                
                }
            });
        }
        else{
            const message = 'Password and repeat password should be same!'
            this.setState({rePassMessage: message})
        }

       
    }

    render() {
        return (

            <div className="Login-register" >
                <h2 className="login-registerH">Hello, F.r.i.e.n.d.s fan, join in our world, where every problem and stress are gone. Just register and see what we have for you!</h2>
                <img src={friendsRegisterGIf} className="intro-gif-register" alt="Register Gif" />
                <form className="register">
                    {this.state.mongoerror && <div className="error">{this.state.mongoerror}</div>}
                    <div className="form-control login-register-label register-label">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Username" name="username" id="username"
                            onChange={this.handleInputChange} />
                        {this.state.errors.usernameError && <div className="error">{this.state.errors.usernameError}</div>}
                    </div>
                    <div className="form-control ">
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" id="password" onChange={this.handleInputChange} />
                        {this.state.errors.passwordError && <div className="error">{this.state.errors.passwordError}</div>}
                    </div>

                    <div className="form-control ">
                        <label><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="repeatPassword" id="password-repeat"
                            onChange={this.handleInputChange} />
                        {this.state.errors.repeatPasswordError && <div className="error">{this.state.errors.repeatPasswordError}</div>}
                        {this.state.rePassMessage && <div className="error">{this.state.rePassMessage}</div>}
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


export default Register
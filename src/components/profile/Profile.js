import React from 'react'
import './Profile.css'
import userService from '../../services/user-service'
import './Profile.css'
import NavProfile from './Nav-Profile';
import profileDiv from '../../images/howYouDoin.gif'
class Profile extends React.Component {
    state = {
        products: null
    };

    componentDidMount() {
        const userId = this.props.userId;
        console.log(userId);
        debugger
        userService.loaduser(userId).then(userdata => {
            this.setState({ username: userdata.username, favorite: userdata.favorite});
        });
    }
    render() {
        const isLogged = this.props.isLogged
        const favorite = this.state.favorite
    
        return (
            <div className = 'profile-div'>
                <NavProfile isLogged={isLogged}/>
            <h3>Hey {this.state.username}, how is your day?</h3>
           
           <img src={profileDiv} alt="img" className="profile-img"/>
           <div id="userinfo">
               
                
                <div>
                  <p>Username: <b>{this.state.username}</b></p>
                  <p style={{ textTransform: 'capitalize'}}>Favorite F.r.i.e.n.d: <b>{favorite}</b></p>
                </div>
                </div>
            </div>

        )
    }
}


export default Profile
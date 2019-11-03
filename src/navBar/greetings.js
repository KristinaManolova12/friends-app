import React from 'react'
import Greetings from './greetingComponents'


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <Greetings.UserGreeting />;
    }
    return <Greetings.GuestGreeting />;
  }
  
  export default Greeting
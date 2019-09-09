import './Header.css';  
import Particles from 'react-particles-js'; 
import React, { Component } from 'react';
import logo from '../img/logo.png'

class Header extends Component {
 
  render() {     
      return(
        <div className="Header">   
          <Particles height="200px"/>
          <img src={logo} style={{maxWidth:'600px', marginTop:'-250px'}}></img>
        </div>
      )
    } 
} 
export default Header;
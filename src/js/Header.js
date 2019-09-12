import './Header.css';  
import Particles from 'react-particles-js'; 
import React, { Component } from 'react';
import logo from '../img/logo.png'

class Header extends Component {
 
  render() {     
      return(
        <div className="Header">   
          <Particles height="200px"
      
            params={{ 
              particles: {
                "number": {
                    "value": 60
                },
                "size": {
                    "value": 1
                },
              },
              "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
              },
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#ccccff",
                  blur: 10
                }
              }
            }}
          />
          <img src={logo} style={{maxWidth:'600px',maxHeight:'180px', top:'1%',position:'absolute', marginLeft:'-300px'}}></img>
        </div>
      )
    } 
} 
export default Header;
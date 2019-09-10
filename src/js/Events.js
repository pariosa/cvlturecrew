import React, { Component } from 'react'; 
import './Events.css';
import LATESTGREATEST from '../img/LATESTGREATEST.jpg'
import TRAPPED from '../img/TRAPPED.jpg'
import FLYER from '../img/FLYER.jpg'

class Events extends Component {
 
  render() {     
        return(
            <div className="Events">
           		<div style={{fontSize:'40px',textAlign:'center'}}>UPCOMING</div>
           		<br/><br/>
            	<img src={LATESTGREATEST} style={{maxWidth:'100%'}}/> 
            </div>
        )
    } 
} 
export default Events;

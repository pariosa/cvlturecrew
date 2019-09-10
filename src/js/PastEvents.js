import React, { Component } from 'react'; 
import './Events.css';
import TRAPPED from '../img/TRAPPED.jpg'
import FLYER from '../img/FLYER.jpg'

class PastEvents extends Component {
 
  render() {     
        return(
            <div className="PastEvents">
 
           		<div style={{fontSize:'40px',textAlign:'center'}}>PAST EVENTS</div>
      				<br/><br/>
      				<img src={FLYER} style={{maxWidth:'100%'}}/>
              <br/><br/>
      				<img src={TRAPPED} style={{maxWidth:'100%'}}/>

            </div>
        )
    } 
} 
export default PastEvents;

import React, { Component } from 'react'; 
import './Home.css';

class Home extends Component {
 
  render() {     
        return(
            <div className="Home">
          		<div className="BannerText" style={{fontSize:'36px',textAlign:'center', lineHeight:'1em',fontFamily: 'Orbitron'}}>
          		YOU ARE NOW LOCKED IN WITH THE #CREW
          		</div>
          		<br/>
          		<br/>
          		<div style={{fontSize:'22px',lineHeight:'1em'}}>
				CVLTURE CREW is a diverse collective of Painters, Designers, DJ's, Producers, MC's, Musicians, and die-hard concert-goers. Have a look around the website or slide over to our social media on  Facebook or IG @CVLTURECREW
				<br/><br/>
				Move your mouse or finger tap on those cool patterns moving above! ;)
           		</div>
            </div>
        )
    } 
} 
export default Home;

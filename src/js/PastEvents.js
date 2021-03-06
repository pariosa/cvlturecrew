import React, { Component } from 'react'; 
import './Events.css';
import trap2 from '../img/trap2.jpg';
import illuminate from '../img/illuminate.jpg';
import TRAPPED from '../img/TRAPPED.jpg'
import FLYER from '../img/FLYER.jpg'
import Lightbox from 'react-image-lightbox';
import LATESTGREATEST from '../img/LATESTGREATEST.jpg';
import lyfe from '../img/lyfe.jpg'  
import cuttncrew from '../img/cuttncrew.jpg';

const images = [
  cuttncrew,
  lyfe,
  LATESTGREATEST,
  FLYER,
  TRAPPED,
  trap2,
  illuminate
];
class PastEvents extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
render() {
    const { photoIndex, isOpen } = this.state;
 
        return(
            <div className="PastEvents">
 
           		<div style={{fontSize:'36px',textAlign:'center', lineHeight:'1em',fontFamily: 'Orbitron'}}>PAST EVENTS</div>
      				<br/><br/>
              <img src={cuttncrew}  onClick={() => this.setState({ isOpen: true })} style={{maxWidth:'100%'}}/> 
              <img src={lyfe}  onClick={() => this.setState({ isOpen: true })} style={{maxWidth:'100%'}}/>
              <img src={LATESTGREATEST}  onClick={() => this.setState({ isOpen: true })} style={{maxWidth:'100%'}}/>
      				<img src={FLYER}  onClick={() => this.setState({ isOpen: true })} style={{maxWidth:'100%'}}/>
              <img src={TRAPPED}  onClick={() => this.setState({ isOpen: true })} style={{maxWidth:'100%'}}/>
            	<img src={trap2}  onClick={() => this.setState({ isOpen: true })} style={{maxWidth:'100%'}}/> 
            	<img src={illuminate}  onClick={() => this.setState({ isOpen: true })} style={{maxWidth:'100%'}}/> 

              {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                        }
                    />
                    )}
            </div>
        )
    } 
} 
export default PastEvents;

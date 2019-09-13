import React, { Component } from 'react'; 
import './Events.css';
import LATESTGREATEST from '../img/LATESTGREATEST.jpg'
import TRAPPED from '../img/TRAPPED.jpg'
import FLYER from '../img/FLYER.jpg' 
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
const images = [
    LATESTGREATEST, 
  ];
class Events extends Component {
 
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
            <div className="Events">
           		<div style={{fontSize:'40px',textAlign:'center'}}>UPCOMING</div>
           		<br/><br/>
            	<img src={LATESTGREATEST}  onClick={() => this.setState({ isOpen: true })} style={{maxWidth:'100%'}}/> 
                
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
export default Events;

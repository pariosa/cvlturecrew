import React, { Component } from 'react'; 
import './Events.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
const images = [
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
           		<div style={{fontSize:'36px',textAlign:'center', lineHeight:'1em',fontFamily: 'Orbitron'}}>UPCOMING</div>
           		<br/><br/>                
                   

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

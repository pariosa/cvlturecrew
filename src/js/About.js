import React, { Component } from 'react'; 
import './About.css';
import crew from '../img/crew.jpg'  
import Lightbox from 'react-image-lightbox';
const images = [
    crew, 
  ];
class About extends Component {
       
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
            <div className="About" style={{fontSize:'22px',lineHeight:'1em'}}>
Every company and collective has a story. Our narrative begins in the underground music & arts communities of Cincinnati, OH. Owner/Operator, Jon G Ferreri Jr, launched our collective during his own creative journey as a Conscious Hip Hop artist; infatuated with Jazz, EDM, Funk, and visual arts. Knowing it couldn't be managed alone, he was later joined by CJ Schiff, Evan Shelton, J.T., That Guy Lighting, and several others; fellow Cincinnati natives who are equally in-love with the creative wonders that fuel our Art & Music scenes. Our family is ever-growing and determined to bring you boundless insight into the creative world, as well as offer platforms and services to take creators to their next level in their careers/passions.            	<br/><br/>
<div style={{textAlign:'center'}}>
The real magic is our incredible crew of creators, and you, our family who joins the experience.
<br/><br/>
<img src={crew}  onClick={() => this.setState({ isOpen: true })} style={{maxWidth:'100%'}}/> 
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
            </div>
        )
    } 
} 
export default About;


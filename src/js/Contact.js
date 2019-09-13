import React, { Component } from 'react'; 
import { Button } from 'semantic-ui-react'
import './Contact.css';

class Contact extends Component {
 state = {
    subject:'',
    body: '',
    formSubmitted: false
  };

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'sender@example.com';

  handleCancel() {
    this.setState({
      feedback: ''
    });
  }

  handleChange(event) {
    //debugger;
    if(event && event.target){
      if(event.target.name === 'subject'){
        this.setState({
          subject: event.target.value
        });
      }
      if(event.target.name === 'body'){
        this.setState({
          body: event.target.value
        })
      }
    }

  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env; 
    

    this.setState({
      formSubmitted: true
    });
  }

   
  render() {     
        return(
            <div className="Contact"> 
           		<div style={{fontSize:'36px',textAlign:'center', lineHeight:'1em',fontFamily: 'Orbitron'}}>			  Contact</div>
          <h3>You’ve made it to the best part of the website! This is where you reach out, and where we further our relationship to something that transpires GROWTH for us both. Please be sure to fill out the form, ensuring all of your information is accurate.</h3>
          <input
           name="subject"
           placeholder="Enter subject/topic"

           onChange={this.handleChange}
           value={this.state.subject}
           />
<br/>
				  <textarea 
				    className="text-input"
				    id="body"
				    name="body"
				    onChange={this.handleChange}
				    placeholder="Enter your message here"
				    required
				    cols='50'
				    rows='9'
				    value={this.state.body}
				  />
          <br/>
				  <div className="btn-group"> 
          <a href={'mailto:info@cvlturecrew.com?&subject=' + this.state.subject + '&body=' + this.state.body}>
          <Button primary href={'mailto:info@cvlturecrew.com?&subject=' + this.state.subject + '&body=' + this.state.body}> 
          Send Mail
          </Button> 
          </a>
          <br/>
          <br/>


          Email: <a href="mailto:info@cvlturecrew.com">info@cvlturecrew.com</a>
          <br/>

          Phone:  <a href="tel:513-652-8652">513.652.8652</a>
          <br/>
          FB: <a href="https://www.facebook.com/cvlturecrew">cvlturecrew</a>
          <br/>
          IG: <a href="https://www.instagram.com/cvlturecrew/?hl=en"> @cvlturecrew </a>
 </div> 
            </div>
        )
    }

} 
export default Contact;

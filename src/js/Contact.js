import React, { Component } from 'react'; 
import './Contact.css';

class Contact extends Component {
 state = {
    feedback: '',
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
    this.setState({
      feedback: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env; 
    this.sendFeedback(
      template,
      this.sender,
      receiverEmail,
      this.state.feedback
    );

    this.setState({
      formSubmitted: true
    });
  }

  sendFeedback(templateId, senderEmail, receiverEmail, feedback) {
    window.emailjs
      .send('mailgun', templateId, {
        senderEmail,
        receiverEmail,
        feedback
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  } 
  render() {     
        return(
            <div className="Contact">
				<form className="feedback-form" onSubmit={this.handleSubmit}>
				  <h1>Send us an Email!</h1>
				  <textarea
				    className="text-input"
				    id="feedback-entry"
				    name="feedback-entry"
				    onChange={this.handleChange}
				    placeholder="Enter your message here"
				    required
				    cols='50'
				    rows='9'
				    value={this.state.feedback}
				  />
				  <div className="btn-group"> 
				    <input type="submit" value="Submit" className="btn btn--submit" />
				  </div>
				</form>
            </div>
        )
    }

} 
export default Contact;

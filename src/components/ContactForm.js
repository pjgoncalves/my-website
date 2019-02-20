import React, { Component } from 'react';
import './ContactForm/ContactForm.css';

class ContactForm extends Component {
  render() {
    return (
      <div className="contactFormWrapper">
        <div name="contact" method="POST" data-netlify="true">
          
          <div className="field">
            <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="What's you name?"/>
              </div>
          </div>


            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" placeholder="Your digital address" />
              </div>
            </div>

              <div className="field">
                <label className="label">Talk to me</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Drop me a line or two"></textarea>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
              </div>
          </div>
        </div>
    );
  }
}

export default ContactForm;
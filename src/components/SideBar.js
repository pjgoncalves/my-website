import React, { Component } from 'react';

import SocialLinks from './SocialLinks';
import ContactForm from './ContactForm';

import '../components/SideBar/SideBar.css';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarFlipped: false
    };
  }
  
  toggleFacet = () => {
    this.setState(state => ({ 
        sidebarFlipped: !state.sidebarFlipped
    }));
  };
  

  
  render() {

    return (
      <div>
        <div className="sidebar-toggle">
          <button className="sidebar-toggle-btn" onClick={this.toggleFacet}> {this.state.sidebarFlipped}
            <div className="letter-image">
              <div className="animated-mail">
                <div className="back-fold"></div>
                <div className="letter">
                  <div className="letter-border"></div>
                  <div className="letter-title"></div>
                  <div className="letter-context"></div>
                  <div className="letter-stamp">
                    <div className="letter-stamp-inner"></div>
                  </div>
                </div>
                <div className="top-fold"></div>
                <div className="body"></div>
                <div className="left-fold"></div>
              </div>
            </div>
          </button>
        </div>
        <div className = { this.state.sidebarFlipped ? 'flipped sidebar-wrapper' : 'sidebar-wrapper' } >
          
          <div className="sidebar-facet front social-links">
          <p>My online aliases</p>
            <SocialLinks/>
          </div>
          <div className="sidebar-facet back contact-form">
            <ContactForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
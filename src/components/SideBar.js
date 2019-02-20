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
            <div class="letter-image">
              <div class="animated-mail">
                <div class="back-fold"></div>
                <div class="letter">
                  <div class="letter-border"></div>
                  <div class="letter-title"></div>
                  <div class="letter-context"></div>
                  <div class="letter-stamp">
                    <div class="letter-stamp-inner"></div>
                  </div>
                </div>
                <div class="top-fold"></div>
                <div class="body"></div>
                <div class="left-fold"></div>
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
import React, { Component } from 'react';
import Credits from './components/Credits';
import Card from './components/Card';
import SideBar from './components/SideBar';

import '../node_modules/bulma/css/bulma.min.css';
import '../src/bulmaswatch.min.css';
import './App.css';




class App extends Component {
  
  render() {
    return (
      <div className = "rootReactComponent">
        <div className = "container">
          <div className = "columns is-centered" >
            <div className = "cardWrapper column is-10">
              <div className = "columns">
                <div className = "column">
                  <div className = "" >
                    <Card />
                  </div>
                </div>
                <div className="column">
                  <SideBar/>              
                </div>

                {/* <div className = "column flipCard">
                  < div className = "socialLinksWrapper" >
                    <SocialLinks/>
                  </div>
                  < div className = "contactFormWrapper" >
                    <ContactForm/>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Credits></Credits>       
        </div>
      </div>
    );
  }
}

export default App;

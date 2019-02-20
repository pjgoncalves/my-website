import React, { Component } from 'react';
import './Credits/Credits.css';

import reactLogo from '../img/logos/react.svg';
import graphqlLogo from '../img/logos/graphql.svg';
import apolloLogo from '../img/logos/apollo.svg';
import netlifyLogo from '../img/logos/netlify.svg';
import bulmaLogo from '../img/logos/bulma.svg';

class Credits extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p> Made possible thanks (<span role="img" aria-label="love">&#x2764;</span>) to:</p>

          <div className="columns is-centered">
            <div className="column is-6">
              <div className="columns is-mobile">
                <div className="column">
                  <a href="https://reactjs.org/">
                    <img src={reactLogo} 
                          aria-label="A JavaScript library for building user interfaces"
                          alt="A JavaScript library for building user interfaces"/>
                  </a>
                </div>
                <div className="column">
                  <a href="https://graphql.org/">
                    <img src={graphqlLogo} 
                          aria-label="GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. "
                          alt="GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. "/>
                  </a>
                </div>
                <div className="column">
                  <a href= "https://www.apollographql.com/">
                    <img src={apolloLogo} 
                          aria-label="Do GraphQL right. Replace many inflexible APIs with a single versatile query system. Decouple frontend and backend development. Ship high quality apps to more platforms faster." 
                          alt="Do GraphQL right. Replace many inflexible APIs with a single versatile query system. Decouple frontend and backend development. Ship high quality apps to more platforms faster." />
                  </a>
                </div>
                <div className="column">
                  <a href="https://www.netlify.com/">
                      <img src={netlifyLogo} 
                            aria-label="An all-in-one workflow that combines global deployment, continuous integration, and automatic HTTPS. And that’s just the beginning."
                            alt="An all-in-one workflow that combines global deployment, continuous integration, and automatic HTTPS. And that’s just the beginning."/>
                  </a>
                </div>
                <div className="column">
                  <a href="https://bulma.io/">
                    <img src={bulmaLogo} 
                        aria-label="Bulma is a free, open source CSS framework based on Flexbox and used by more than 150,000 developers."
                        alt="Bulma is a free, open source CSS framework based on Flexbox and used by more than 150,000 developers."/>
                  </a>
                </div>
              </div> 
            </div>    
          </div>
        </div>
      </footer>
    );
  }
}

export default Credits;
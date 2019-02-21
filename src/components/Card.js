import React, { Component } from 'react';
import './Card/Card.css';
import pedro from '../img/pedro.jpeg';

class Card extends Component {
  render() {
    return (
      <div className="custom-card">
        <div className="pedro">
          <img src={pedro} 
              aria-label="Pedro's mugshot" 
              alt="Pedro's mugshot">
          </img>
        </div>
        <h1>Hello friend<span role="img" aria-label="hi emoji">🖖</span></h1>
        <p>I'm a Front-end Developer with 4 years of experience. <br/><br/></p>
        <p>In the last year or so, I've been working in the Hitachi Design System team, building and testing components and reviewing design handoffs. </p>
        <p><br/>Previously, I worked on a Pentaho services team, building data consumption dashboards and visualisations.
        </p>
      </div>
    );
  }
}

export default Card;
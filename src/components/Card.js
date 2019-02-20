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
        <p>I am a Front-end Developer with more than four years of experience.
          For the last 3 years my job was mainly, to build data consumption dashboards and visualisations. <br/> In the last year or so, I've been currently working in the Hitachi Design System team as a DevUX, in close collaboration with a product development team for a React based UI Kit.</p>
      </div>
    );
  }
}

export default Card;
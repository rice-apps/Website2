import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './Projects.css';

export default class LandingPage extends Component {


  render() {
    return(
    <div>
    <div className = "projectsPageWrapper">
     <Fade left duration = {1500}>
        <div id = "beakspeak">
          <div id = "BsTitle"><h1>Beakspeak</h1></div>
          <div className = "circle">
            <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
            <div className = "projectText">
            Anonymous social media platform exclusively for the Rice community</div>
          </div>
        </div>
      </Fade>
      <Fade right duration = {1500}>
        <div id = "riceelections">
          <div id = "RETitle"><h1>Rice Elections</h1></div>
          <div className = "circle">
            <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
            <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
      </Fade>
      <Fade left duration = {1500}>
        <div id = "coffeehouse">
          <div id = "ChSTitle"><h1>Coffeehouse Scheduler</h1></div>
          <div className = "circle">
            <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
            <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
      </Fade>
      <Fade right duration = {1500}>
        <div id = "ricebikes">
          <div id = "RBTitle"><h1>Rice Bikes</h1></div>
          <div className = "circle">
            <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
            <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
      </Fade>
    </div>
    </div>
  )

  }

}

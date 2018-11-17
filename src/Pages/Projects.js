import React, { Component } from 'react';
import './Projects.css';

export default class LandingPage extends Component {


  render() {
    return(
    <div>
    <div className = "projectsPageWrapper">
        <div id = "beakspeak">
          <div className = "projectTitle">Beakspeak</div>
          <div className = "circle">
            <div className = "projectText">Anonymous social media platform exclusively for the Rice community</div>
          </div>
        </div>
        <div id = "riceelections">
          <div className = "projectTitle">Rice Elections</div>
          <div className = "circle">
            <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
        <div id = "coffeehouse">
          <div className = "projectTitle">Coffeehouse Scheduler</div>
          <div className = "circle">
            <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
        <div id = "ricebikes">
          <div className = "projectTitle">Rice Bikes</div>
          <div className = "circle">
            <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
    </div>
    </div>
  )

  }

}

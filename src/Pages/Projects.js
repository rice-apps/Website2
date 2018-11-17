import React, { Component } from 'react';
import './Projects.css';

export default class LandingPage extends Component {


  render() {
    return(
    <div>
    <div className = "projectsPageWrapper">
        <div id = "beakspeak">
          <div id = "BsTitle"><h1>Beakspeak</h1></div>
          <div className = "circle">
            <div className = "projectText">
            Anonymous social media platform exclusively for the Rice community</div>
          </div>
        </div>
        <div id = "riceelections">
          <div id = "RETitle"><h1>Rice Elections</h1></div>
          <div className = "circle">
            <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
        <div id = "coffeehouse">
          <div id = "ChSTitle"><h1>Coffeehouse Scheduler</h1></div>
          <div className = "circle">
            <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
        <div id = "ricebikes">
          <div id = "RBTitle"><h1>Rice Bikes</h1></div>
          <div className = "circle">
            <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
    </div>
    </div>
  )

  }

}

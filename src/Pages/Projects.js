import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './Projects.css';
import {BrowserRouter as Router, Link} from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return(

    <div className = "projectsPageWrapper">


     <Fade left duration = {1500}>
        <div id = "beakspeak">
          <div id = "BsTitle">
          <Router>
            <div>
              <Link to = "/beakspeak" onClick = {() => window.location.reload()} class = "link">
                <h1>Beakspeak</h1>
              </Link>
            </div>
          </Router>
          </div>
          <div className = "circle">
            <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
            <div className = "projectText">
            Anonymous social media platform exclusively for the Rice community</div>
          </div>
        </div>
      </Fade>

      <Fade right duration = {1500}>
        <div id = "riceelections">
        <Router>
          <div id = "RETitle">
            <Link to = "/riceelections" onClick = {() => window.location.reload()} class = "link">
              <h1>Rice Elections</h1>
            </Link>
          </div>
        </Router>
          <div className = "circle">
            <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
            <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
      </Fade>

      <div id = "hedwig">
      <Router>
        <div id = "ChSTitle">
          <Link to = "/hedwig" onClick = {() => window.location.reload()} class = "link">
            <h1>Hedwig</h1>
          </Link>
        </div>
      </Router>
        <div className = "circle">
          <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
          <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        </div>
      </div>

      <Fade left duration = {1500}>
        <div id = "coffeehouse">
        <Router>
          <div id = "ChSTitle">
            <Link to = "/coffeehouse" onClick = {() => window.location.reload()} class = "link">
              <h1>Coffeehouse Scheduler</h1>
            </Link>
          </div>
        </Router>
          <div className = "circle">
            <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
            <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
      </Fade>

      <Fade right duration = {1500}>
        <div id = "ricebikes">
        <Router>
          <div id = "RBTitle">
            <Link to = "/ricebikes" onClick = {() => window.location.reload()} class = "link">
              <h1>Rice Bikes</h1>
            </Link>
          </div>
        </Router>
          <div className = "circle">
            <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
            <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
      </Fade>

    </div>
  )

  }

}

import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './Projects.css';
import {BrowserRouter as Router, Link, NavLink, Redirect} from "react-router-dom";

export default class Projects extends Component {

  render() {
    return(

    <div className = "projectsPageWrapper">


     <Fade left duration = {1500}>
        <div id = "beakspeak">
          <div id = "BsTitle">
            <div>


                <NavLink to = "/beakspeak"  class = "link">
                <h1>Beakspeak</h1>
              </NavLink>
            </div>
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
          <div id = "RETitle">
            <NavLink to = "/riceelections"  class = "link">
              <h1>Rice Elections</h1>
            </NavLink>
          </div>
          <div className = "circle">
            <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
            <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
      </Fade>

      <div id = "hedwig">
        <div id = "HwTitle">
          <NavLink to = "/hedwig" class = "link">
            <h1>Hedwig</h1>
          </NavLink>
        </div>
        <div className = "circle">
          <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
          <div className = "projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        </div>
      </div>

      <Fade left duration = {1500}>
        <div id = "coffeehouse">
        <Router>
          <div id = "ChSTitle">
            <NavLink to = "/coffeehouse" class = "link">
              <h1>Coffeehouse Scheduler</h1>
            </NavLink>
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
          <div id = "RBTitle">
            <NavLink to = "/ricebikes"  class = "link">
              <h1>Rice Bikes</h1>
            </NavLink>
          </div>
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

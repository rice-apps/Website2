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
            Rice's anonymous, exclusive social media platform</div>
          </div>
        </div>
      </Fade>

      <Fade right duration = {1500}>
        <div id = "carpool">
          <div id = "cTitle">
            <NavLink to = "/carpool"  class = "link">
              <h1>Carpool</h1>
            </NavLink>
          </div>
          <div className = "circle">
            <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
            <div className = "projectText">Ride-sharing at Rice made easier</div>
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
          <div className = "projectText">The Hoot's delivery app</div>
        </div>
      </div>

      <Fade left duration = {1500}>
        <div id = "website">
          <div id = "wTitle">
            <NavLink to = "/website" class = "link">
              <h1>Website</h1>
            </NavLink>
          </div>
          <div className = "circle">
            <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
            <div className = "projectText">Brand creation for organizations</div>
          </div>
        </div>
      </Fade>

      <Fade right duration = {1500}>
        <div id = "reservations">
          <div id = "RTitle">
            <NavLink to = "/reservations"  class = "link">
              <h1>Reservations</h1>
            </NavLink>
          </div>
          <div className = "circle">
            <img className = "airbnb" src = "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
            <div className = "projectText">Reserve rooms on the Rice campus</div>
          </div>
        </div>
      </Fade>

    </div>
  )

  }

}

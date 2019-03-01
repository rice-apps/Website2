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
        <div id = "carpool">
        <Router>
          <div id = "CPTitle">
            <Link to = "/carpool" onClick = {() => window.location.reload()} class = "link">
              <h1>Carpool</h1>
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
        <div id = "reservations">
        <Router>
          <div id = "RVTitle">
            <Link to = "/reservations" onClick = {() => window.location.reload()} class = "link">
              <h1>Reservation</h1>
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
        <div id = "website-team">
        <Router>
          <div id = "WSTitle">
            <Link to = "/website" onClick = {() => window.location.reload()} class = "link">
              <h1>Website</h1>
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

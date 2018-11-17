import React, { Component } from 'react';
import LandingPage from './Pages/LandingPage.js';
import Testimonials from './Pages/Testimonials.js'
import WorkForUs from './Pages/WorkForUs.js';
import JoinUs from './Pages/JoinUs.js';
import Projects from './Pages/Projects.js';
import AboutUs from './Pages/AboutUs.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage/>
        <AboutUs/>
        <JoinUs/>
        <WorkForUs/>
        <Projects/>
        <Testimonials/>
      </div>
    );
  }
}

export default App;

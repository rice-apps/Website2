import React, { Component } from 'react';
import LandingPage from './Pages/LandingPage.js';
import Testimonials from './Pages/Testimonials.js'
import WorkForUs from './Pages/WorkForUs.js';
import JoinUs from './Pages/JoinUs.js';
import Projects from './Pages/Projects.js';
import AboutUs from './Pages/AboutUs.js';
import WhatWeDo from './Pages/WhatWeDo.js';
import './App.css';
import './hamburgers.css';
import './styles.css'
import ScrollIntoView from 'react-scroll-into-view';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  handleClick() {
    //call this function when the hamburger menu is clicked
    //if the menu is open, close it
    //if it's closed, open it
    this.setState({ clicked: !this.state.clicked })
  }
  closeSidebar() {
    //Call this function whenever user clicks outside of the sidebar menu
    if (this.state.clicked) {
      //But only sets clicked to False when clicked is True
      this.setState({ clicked: false })
    }
  }
  //end of sidebar-menu
  render() {
    //start sidebar-menu
    let menuStatus = this.state.clicked ? "open" : "";
    let button_classes = this.state.clicked
      ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse ";
    //end of sidebar-menu
    return (
      <div>
        <button onClick={() => this.handleClick()}
          id="hamburger" class={button_classes} type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        {/*<div id="sidebar" class={sidebar_menu_classes}>*/}

        <div id="menu" class={menuStatus}>
          <ScrollIntoView selector="#home">
            <div class="sidebarTextHome">HOME</div>
          </ScrollIntoView>
          <ScrollIntoView selector="#aboutUs">
            <div class="sidebarText">MISSION</div>
          </ScrollIntoView>
          <ScrollIntoView selector="#projects">
            <div class="sidebarText">PROJECTS</div>
          </ScrollIntoView>
          <ScrollIntoView selector="#testimonials">
            <div class="sidebarText">TESTIMONIALS</div>
          </ScrollIntoView>
          <ScrollIntoView selector="#contactUs">
            <div class="sidebarTextContact">CONTACT US</div>
          </ScrollIntoView>
        </div>
        <div onClick={() => this.closeSidebar()}>
          <div id="home">
            <LandingPage />
          </div>
          <div id="whatWeDo"><WhatWeDo /></div>
          <div id="aboutUs"><AboutUs /></div>
          <div id="projects"><Projects /></div>
          <div id="testimonials"><Testimonials /></div>
          <div id="contactUs"><JoinUs /></div>
          <div id="joinUs"><WorkForUs /></div>
          {/*<div id="testimonials"><Testimonials/></div>  */}
        </div>
      </div>
    );
  }
}

export default App;

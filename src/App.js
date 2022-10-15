import React, { useState, useReducer, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import LandingPage from './Pages/LandingPage.js';
import Testimonials from './Pages/Testimonials.js'
import WorkForUs from './Pages/WorkForUs.js';
import JoinUs from './Pages/JoinUs.js';
import Projects from './Pages/Projects.js';
import AboutUs from './Pages/AboutUs.js';
import WhatWeDo from './Pages/WhatWeDo.js';
import Partners from './Pages/Partners.js';
import './App.css';
import './hamburgers.css';
import './styles.css'
import ScrollIntoView from 'react-scroll-into-view';
import ReactGA from 'react-ga';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "./ThemeGlobal"
import reducer from "./ThemeReducer";
import Context from "./ThemeContext"
import { lightTheme, darkTheme } from "./Themes"
import ThemeSwitch from './ThemeSwitch.js';
// import { withRouter } from "react-router";

function App() {

  const [clicked, setClicked] = useState(false);
  
  function initializeReactGA() {
      ReactGA.initialize('UA-137795173-1');
      ReactGA.pageview('/');
  }

  function handleClick() {
    //call this function when the hamburger menu is clicked
    //if the menu is open, close it
    //if it's closed, open it
    // this.setState({ clicked: !this.state.clicked })
    setClicked(!clicked)
  }
  
  function closeSidebar() {
    //Call this function whenever user clicks outside of the sidebar menu
    if (clicked) {
      //But only sets clicked to False when clicked is True
      setClicked(false)
    }
  }

  // call once (on mount)
  useEffect(() =>  {
    initializeReactGA();
  }, []);

  //start sidebar-menu
  let menuStatus = clicked ? "open" : "closed";
  let button_classes = clicked
    ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse ";
  //end of sidebar-menu

  const [state, dispatch] = useReducer(reducer, {
    isDark: false
  });

  console.log(state.isDark);

  return (
    <Context.Provider value={{ state, dispatch }}>
    <ThemeProvider theme={ state.isDark ? darkTheme : lightTheme }>
      <>
      <GlobalStyles/>
      <ParallaxProvider>
      <div>
        <div class="top-area">
          <button onClick={() => handleClick()}
            id="hamburger" class={button_classes} type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>

          <div id="dark-switch"><ThemeSwitch /></div>
        </div>

        <div id="menu" class={menuStatus}>
          <ScrollIntoView selector="#home">
            <div class="sidebarTextHome">HOME</div>
          </ScrollIntoView>
          <ScrollIntoView selector="#whatWeDo">
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
        <div onClick={() => closeSidebar()}>

          {/* pass theme into landing page for logo */}
          <div id="home"><LandingPage isDark={state.isDark}/></div>
          <div id="whatWeDo"><WhatWeDo /></div>
          <div id="aboutUs"><AboutUs /></div>
          {/* <div id="projects"><Projects isDark={state.isDark}/></div> */}
          <div id="testimonials"><Testimonials /></div>
          <div id="partners"><Partners /></div>
          {/* <div id="contactUs"><JoinUs /></div> */}
          {/* <div id="joinUs"><WorkForUs /></div> */}
        </div>
      </div>
      </ParallaxProvider>
      </>
    </ThemeProvider>
    </Context.Provider>
  );
}

export default App;

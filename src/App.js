import React, { Component } from 'react';
import LandingPage from './Pages/LandingPage.js';
import Testimonials from './Pages/Testimonials.js'
import WorkForUs from './Pages/WorkForUs.js';
import JoinUs from './Pages/JoinUs.js';
import Projects from './Pages/Projects.js';
import AboutUs from './Pages/AboutUs.js';
import './App.css';
import './hamburgers.css';
import './styles.css'
//import ScrollIntoView from 'react-scroll-into-view';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  handleClick() {
    //call this function when the hamburger menu is clicked
    //if the menu is open, close it
    //if it's closed, open it
    this.setState({ clicked: !this.state.clicked })
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
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
    //if statemenets to display and hide sidebar-menu
    var button_classes
    var sidebar_menu_classes
    var menu_div_class
    var menu_parent_id

    if (this.state.clicked == true) {
      //if sidebar is open
      button_classes = "hamburger hamburger--collapse is-active"
      sidebar_menu_classes = "sidebar sidebarUnhidden"
      menu_div_class = ""
      menu_parent_id = "menuParentOpen"
    }
    else {
      //if sidebar is closed
      button_classes = "hamburger hamburger--collapse "
      sidebar_menu_classes = "sidebar sidebarHidden"
      menu_div_class = ""
      menu_parent_id = "menuParentClose"
    }
    const menuLinkStyle = {
      color: '#002FA4',
      marginTop: '4vh'
    }
    //end of sidebar-menu

    return (
      <div >
        <div id={menu_parent_id}>
          <div id="menuWrapper" style={{flex: 1}}>
            <button onClick={() => this.handleClick()}
              id="hamburger" class={button_classes} type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>

            {/*<div id="sidebar" class={sidebar_menu_classes}>*/}
            
            <div class={sidebar_menu_classes}>HOME</div >
            <div class={sidebar_menu_classes}>Mission</div>
            <div class={sidebar_menu_classes}>Projects</div>
            <div class={sidebar_menu_classes}>Contact Us</div>
            <div class={sidebar_menu_classes}>Join Us</div>
            {/*</div>*/}
          </div>
        </div>
        <div onClick={() => this.closeSidebar()}>
          <div id="home">
            <LandingPage />
            <AboutUs/>
            <JoinUs/>
            <Projects/>
            <Testimonials/>
            <WorkForUs/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

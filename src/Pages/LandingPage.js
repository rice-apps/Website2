import React, { Component } from 'react';
import './LandingPage.css';
export default class LandingPage extends Component {
  render() {


    return(
    <div>
      <div id = "title">
        <div id = "ds" class = "initialText">
        {/* <style>@import url('https://fonts.googleapis.com/css?family=Questrial');</style> */}
        DIGITAL SOLUTIONS
        </div>

        <div id = "sg" class = "initialText">
        <span id="gray">FOR</span> <span id = "social">SOCIAL</span> GOOD
        </div>

        <div id = "riceApps">
        riceApps
        </div>

      </div>

    </div>
  )
  }
}

import React, { Component } from 'react';
import './Partners.css';
import FOTW from '../fotw.jpg';
import BakerRipley from '../bakerripley.png';
import CsClub from '../csclub.png';
import Coffeehouse from '../chaus.jpg';
import Fade from 'react-reveal/Fade';
export default class Partners extends Component {
  render() {

    return(
    <div id = "trash">
    <Fade duration = {3000}>

    <div id="text"> We've worked with...</div>
    <div id="logosWrapper">
    <div id="logos">
            <img id= "image" src= {FOTW} />
            <img id = "image" src = {BakerRipley} />
            <img id ="image" src={CsClub} />
            <img id ="image" src={Coffeehouse} />
            <img id ="image" src={Coffeehouse} />
            <img id ="image" src={Coffeehouse} />

    </div>
    </div>
    </Fade>
    </div>
  )
  }
}

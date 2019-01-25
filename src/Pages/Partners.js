import React, { Component } from 'react';
import './Partners.css';
import FOTW from '../fotw.jpg';
import BakerRipley from '../bakerripley.png';
import CsClub from '../csclub.png';
import Coffeehouse from '../chaus.jpg';
export default class Partners extends Component {
  render() {

    return(
    <div id = "trash">
    <div id="text"> Our Partners</div>
    <div id="logos">
    <img id= "image" src= {FOTW} alt="" />
    <img id = "image" src = {BakerRipley} alt="" />
    <img id ="image" src={CsClub} alt="" />
    <img id ="image" src={Coffeehouse} alt="" />
    </div>
    </div>
  )
  }
}

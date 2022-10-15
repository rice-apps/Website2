import React, { Component } from 'react';
import './Partners.css';
import FOTW from '../images/fotw.jpg';
import BakerRipley from '../images/bakerripley.png';
import CsClub from '../images/csclub.png';
import Coffeehouse from '../images/chaus.jpg';
import EastWest from '../images/eastwest.png'
import Hoot from '../images/hoot.jpeg'
import HFB from '../images/hfb.png'
import SS from '../images/second-servings.jpeg'
import HFH from '../images/hives-for-heroes-partner-logo.jpeg'
import MOODY from '../images/moody.png'
import PDI from '../images/pdi.jpeg'
import CCD from '../images/ccd.png'

import Fade from 'react-reveal/Fade';
export default class Partners extends Component {
    render() {

        return (
            <div id="trash">
                <Fade duration={3000}>

                    <div id="text"> We've worked with...</div>
                    <div id="logosWrapper">
                        <div id="logos">
                            <img id="image" src={MOODY} alt="" />
                            <img id="image" src={SS} alt="" />
                            <img id="image" src={HFB} alt="" />
                            <img id="image" src={HFH} alt="" />
                            <img id="image" src={CCD} alt="" />
                            <img id="image" src={PDI} alt="" />
                            <img id="image" src={FOTW} alt="" />
                            <img id="image" src={BakerRipley} alt="" />
                            <img id="image" src={CsClub} alt="" />
                            <img id="image" src={Coffeehouse} alt="" />
                            <img id="image" src={EastWest} alt="" />
                            <img id="image" src={Hoot} alt="" />


    </div>
    </div>
    </Fade>
    </div>
  )
  }
}

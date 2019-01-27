import React, { Component } from 'react';
import './Partners.css';
import FOTW from '../fotw.jpg';
import BakerRipley from '../bakerripley.png';
import CsClub from '../csclub.png';
import Coffeehouse from '../chaus.jpg';
import EastWest from '../images/eastwest.png'
import Hoot from '../images/hoot.jpeg'

import Fade from 'react-reveal/Fade';
export default class Partners extends Component {
    render() {

        return (
            <div id="trash">
                <Fade duration={3000}>

                    <div id="text"> We've worked with...</div>
                    <div id="logosWrapper">
                        <div id="logos">
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

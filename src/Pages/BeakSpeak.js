import React, { Component } from 'react';
import './BeakSpeak.css';

export default class BeakSpeak extends Component {
    render() {
        return (
            <div>
                <div className="BeakSpeakWrapper">
                    <div id="BeakSpeakParagraph">
                        {/* <style>
                        @import url('https://fonts.googleapis.com/css?family=Questrial');
                    </style> */}
                        <p>
                            We emphasize the <em>product</em> and the <em>process</em> — our developers learn and apply new technologies to custom tailored products that directly impact client organizations.
                    </p>
                    </div>
                </div>
                <div className="projectsPageWrapper">
                    <div id="beakspeak">
                        <div id="BsTitle"><h1>Beakspeak</h1></div>
                        <div className="circle">
                            <img className="airbnb" src="http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
                            <div className="projectText">
                                Anonymous social media platform exclusively for the Rice community</div>
                        </div>
                    </div>
                    <div id="riceelections">
                        <div id="RETitle"><h1>Rice Elections</h1></div>
                        <div className="circle">
                            <img className="airbnb" src="http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
                            <div className="projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                        </div>
                    </div>
                    <div id="coffeehouse">
                        <div id="ChSTitle"><h1>Coffeehouse Scheduler</h1></div>
                        <div className="circle">
                            <img className="airbnb" src="http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
                            <div className="projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                        </div>
                    </div>
                    <div id="ricebikes">
                        <div id="RBTitle"><h1>Rice Bikes</h1></div>
                        <div className="circle">
                            <img className="airbnb" src="http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-880x628.png" alt=""></img>
                            <div className="projectText">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}
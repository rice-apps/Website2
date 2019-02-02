import React, { Component } from 'react';
import './ProjectsTemplate.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom'
// import React from "react";
import App from "../../App.js";
import {BrowserRouter as Router, Link} from "react-router-dom";


export default class BeakSpeak extends Component {
    render() {
        return (
            <Router>
                <div>             
                    <Link to="/" onClick= {() => window.location.reload()} >
                        <img class = "homeIcon" src={require("../../home-icon.png")}/>
                    </Link>
                    <div className="pageWrapper">               
                        <div id="content">
                            <div id="projectName">
                                BeakSpeak.
                            </div>
                            <div class="paragraphs" id="projectDescription">
                                Insert description of project here. Lorem ipsum dolor sit amet, erat postea argumentum id mei, ius quaeque epicurei ut. Doming aperiri fabulas pri id, id dolor percipitur nec, sale error ei per. Dolores
                            </div>
                            <div>
                                <div id="teamAndProjectScope" class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" >Team</div>
                                    <div class="paragraphs">Shryans Goyal, Danny Andreini</div>
                                </div>
                                <div class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" id="projectScope">Project Scope</div>
                                    <div class="paragraphs">Design, Machine Learning, User Research, Cloud Compiling, Javascript, Beta Testing</div>

                                </div>
                            </div>
                            <div>
                                <div class="caption">THE PROBLEM</div>
                                <div class="captionDescription">Insert description of project here. Lorem ipsum dolor sit amet, erat postea argumentum id mei, ius quaeque epicurei ut. Doming aperiri fabulas pri id, id dolor percipitur nec, sale error ei per. Dolores insolens mea ex, eam definitiones reprehendunt ei, sed eu commune omnesque sadipscing. Diam admodum offendit usu at, ei aperiam interesset quo.</div>
                            </div>
                            <div>
                                <div class="caption">OUR SOLUTION</div>
                                <div class="captionDescription">Insert description of project here. Lorem ipsum dolor sit amet, erat postea argumentum id mei, ius quaeque epicurei ut. Doming aperiri fabulas pri id, id dolor percipitur nec, sale error ei per. Dolores insolens mea ex, eam definitiones reprehendunt ei, sed eu commune omnesque sadipscing. Diam admodum offendit usu at, ei aperiam interesset quo.</div>
                            </div>
                            
                        </div>              
                    </div>
                </div>
            </Router>
        )

    }

}
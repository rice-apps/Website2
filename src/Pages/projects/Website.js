import React, { Component } from 'react';
import './ProjectsTemplate.css';
import {BrowserRouter as Router, NavLink, Link} from "react-router-dom";


export default class Website extends Component {
    render() {
        return (
                <div>
                    <NavLink to="/"  >
                        <img class = "homeIcon" src={require("../../home-icon.png")}/>
                    </NavLink>
                    <div className="pageWrapper">
                        <div id="content">
                            <div id="projectName">
                                Website.
                            </div>
                            <div class="paragraphs" id="projectDescription">
                            Building websites for organizations.
                            </div>
                            <div>
                                <div id="teamAndProjectScope" class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" >Team</div>
                                    <div class="paragraphs">Shryans Goyal, Danny Andreini, Pranay Mittal, Sharon Sun, Jiin Rhew, Victor Song, Metinee Ding</div>
                                </div>
                                <div class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" id="projectScope">Project Scope</div>
                                    <div class="paragraphs">Design, React, Mobile, Javascript, Beta Testing</div>

                                </div>
                            </div>
                            <div>
                                <div class="caption">THE PROBLEM</div>
                                <div class="captionDescription">How can we rebrand RiceApps using the Website by keeping stakeholders involved and helping developers learn industry practices and technologies?</div>
                            </div>
                            <div>
                                <div class="caption">OUR SOLUTION</div>
                                <div class="captionDescription">The Website is a design rebrand of the RiceApps ecosystem to better reflect the organization in its goals, vision, purpose and functions. We created a coherent design style for current and future RiceApps projects. The current website is limited in its design and functionality to effectively communicate RiceApps' organizational dynamics. We made interactions between RiceApps and its stakeholders more efficient using third party integrations like Typeform, while simultaneously retaining RiceApps' identity.</div>
                            </div>

                        </div>
                    </div>
                </div>
        )

    }

}

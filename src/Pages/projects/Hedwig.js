import React, { Component } from 'react';
import './ProjectsTemplate.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

export default class Hedwig extends Component {
    render() {
        return (
                <div>
                    <NavLink to="/" >
                        <img class="homeIcon" src={require("../../home-icon.png")} />
                    </NavLink>
                    <div className="pageWrapper">
                        <div id="content">
                            <div id="projectName">
                                Hedwig.
                            </div>
                            <div class="paragraphs" id="projectDescription">
                                Hedwig is an application which streamlines the process of delivering food and drinks from Rice businesses such as the Hoot and East West Tea.
                            </div>
                            <div>
                                <div id="teamAndProjectScope" class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" >Team</div>
                                    <div class="paragraphs">Jeffrey Wang, Will Mundy</div>
                                </div>
                                <div class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" id="projectScope">Project Scope</div>
                                    <div class="paragraphs">
                                        React Native
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div class="caption">THE PROBLEM</div>
                                <div class="captionDescription">
                                    Currently, there is no effective way for Rice students to buy food from businesses at the Rice Memorial Center like East West Tea and the Hoot other than to travel there in person. Often, this prevents students that would have otherwise bought food from frequenting these establishments.
                                </div>
                            </div>
                            <div>
                                <div class="caption">OUR SOLUTION</div>
                                <div class="captionDescription">
                                    Hedwig is a React Native application for iOS and Android which allows Rice students to order food and drink from East West Tea and the Hoot. It provides an interface for students to view available items, pay for said items, and view estimated time of delivery.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        )
    }
}

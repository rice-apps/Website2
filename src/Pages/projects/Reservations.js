import React, { Component } from 'react';
import './ProjectsTemplate.css';
import {BrowserRouter as Router, NavLink} from "react-router-dom";


export default class Reservations extends Component {
    render() {
        return (
                <div>
                    <NavLink to="/" >
                        <img class = "homeIcon" src={require("../../home-icon.png")}/>
                    </NavLink>
                    <div className="pageWrapper">
                        <div id="content">
                            <div id="projectName">
                                Reservations.
                            </div>
                            <div class="paragraphs" id="projectDescription">
                            Room Reservation app for residential colleges at Rice.
                            </div>
                            <div>
                                <div id="teamAndProjectScope" class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" >Team</div>
                                    <div class="paragraphs">Josh Dunning</div>
                                </div>
                                <div class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" id="projectScope">Project Scope</div>
                                    <div class="paragraphs">React, User Research, Javascript, Beta Testing</div>

                                </div>
                            </div>
                            <div>
                                <div class="caption">THE PROBLEM</div>
                                <div class="captionDescription"> The current reservation process to reserve rooms at residential colleges is opaque. Students have to go through layers of procedure, and they are hesitatnt to do so. The college secretaries also have to process unnecessary requests. This can be avoided.
                            </div>
                            <div>
                                <div class="caption">OUR SOLUTION</div>
                                <div class="captionDescription">Create a standardized reservation app, which automates the entire process. It also increases process efficiency and transparency. </div>
                            </div>
</div>
                        </div>
                    </div>
                </div>
        )

    }

}

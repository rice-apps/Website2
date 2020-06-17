import React, { Component } from 'react';
import './ProjectsTemplate.css';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import ScrollToTopOnMount from './ScrollToTopOnMount';


export default class CCD extends Component {
    render() {
        return (
                <div>
                    < ScrollToTopOnMount />
                    <NavLink to="/" >
                        <img class = "homeIcon" src={require("../../home-icon.png")}/>
                    </NavLink>
                    <div className="pageWrapper">
                        <div id="content">
                            <div id="projectName">
                                CCD.
                            </div>
                            <div class="paragraphs" id="projectDescription">
                            A matching tool used by the CCD for their Fall and Spring externship programs.
                            </div>
                            <div>
                                <div id="teamAndProjectScope" class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" >Team</div>
                                    <div class="paragraphs">TBD</div>
                                </div>
                                <div class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" id="projectScope">Project Scope</div>
                                    <div class="paragraphs">User Research, Python, React, Beta Testing</div>

                                </div>
                            </div>
                            <div>
                                <div class="caption">THE PROBLEM</div>
                                <div class="captionDescription"> The current externship matching process is opaque, with the introduction of Google Sheets over Excel marking the latest update to the process. 
                            </div>
                            <div>
                                <div class="caption">OUR SOLUTION</div>
                                <div class="captionDescription">Our system will supercharge the productivity of the CCD employees as they match students, by efficiently filtering and sorting candidates so that the employees can select make empowered decisions. </div>
                            </div>
</div>
                        </div>
                    </div>
                </div>
        )

    }

}

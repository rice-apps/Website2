import React, { Component } from 'react';
import './ProjectsTemplate.css';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';
import ScrollToTopOnMount from './ScrollToTopOnMount';

export default class Carpool extends Component {
    render() {
        return (
                <div>
                    < ScrollToTopOnMount />
                    <NavLink to="/" >
                        <img class="homeIcon" src={require("../../home-icon.png")} />
                    </NavLink>
                    <div className="pageWrapper">
                        <div id="content">
                            <div id="projectName">
                                Carpool.
                            </div>
                            <div class="paragraphs" id="projectDescription">
                                Carpool is an application which assists Rice students in finding carpooling options to travel to airports during holiday seasons.
                            </div>
                            <div>
                                <div id="teamAndProjectScope" class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" >Team</div>
                                    <div class="paragraphs">Diksha Gupta</div>
                                </div>
                                <div class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" id="projectScope">Project Scope</div>
                                    <div class="paragraphs">
                                        AngularJS, ExpressJS
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div class="caption">THE PROBLEM</div>
                                <div class="captionDescription">
                                    Currently, students use a Google Sheets document listing past and future carpool rides that contain the destination, date/time, student’s name, phone number, and other information. Students enter the time they plan to leave Rice or the airport, and if someone else matches with their time, they can contact each other and coordinate a ride. However, this does not have a smooth interface, does not have a way to show time flexibility, lacks security, and does not notify drivers of riders which have joined/left their carpool.
                                </div>
                            </div>
                            <div>
                                <div class="caption">OUR SOLUTION</div>
                                <div class="captionDescription">
                                Carpool is an AngularJS web application aimed to help Rice students by facilitating the process of finding and organizing carpools with other Rice student. The app provides an interface for students to input certain parameters of the ride they wish to carpool on, such as departing and arrival times and locations, to either search and join existing rides or create their own rides on.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        )
    }
}

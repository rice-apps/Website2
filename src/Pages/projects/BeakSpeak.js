import React, { Component } from 'react';
import './ProjectsTemplate.css';
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";


export default class BeakSpeak extends Component {
    render() {
        return (

                <div>
                    <NavLink to="/" >
                        <img class="homeIcon" src={require("../../home-icon.png")} />
                    </NavLink>
                    <div className="pageWrapper">
                        <div id="content">
                            <div id="projectName">
                                BeakSpeak.
                            </div>
                            <div class="paragraphs" id="projectDescription">
                                BeakSpeak is a social media application designed to promote intercollegiate social life at Rice by allowing for anonymous posts and comments, similar to YikYak.
                            </div>
                            <div>
                                <div id="teamAndProjectScope" class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" >Team</div>
                                    <div class="paragraphs">Noushin Quazi</div>
                                </div>
                                <div class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" id="projectScope">Project Scope</div>
                                    <div class="paragraphs">
                                        NodeJS, React Native, ExpressJS, MongoDB
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div class="caption">THE PROBLEM</div>
                                <div class="captionDescription">
                                    We have a lot of residential college pride, which is great because the residential college system does a good job of establishing a warm, welcoming community you come to call family! Unfortunately, this system tends to be socially divisive and at times suffocating. People don't feel encouraged to branch out to engage with the greater Rice society -- this leads to a lot of residential pride and very low Rice pride! Consumer research bears out the view that the residential college system is socially restrictive and that existing social outlets are good at maintaining existing relationships but not at forming new ones. Further, current social outlets carry the burden of identity. Therefore, the problem is that the current health of Rice pride and interconnectivy is poor, and improvement is desired.
                                </div>
                            </div>
                            <div>
                                <div class="caption">OUR SOLUTION</div>
                                <div class="captionDescription">
                                    A number of interviewees expressed nostalgia for products such as YikYak. Therefore, we created BeakSpeak, an application which allows for anonymous posts by Rice students. BeakSpeak authenticates Rice students using Rice IDP and allows user to post and comment anonymously. It also allows students to report problematic or abusive content, balancing anonymity and security.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        )

    }

}
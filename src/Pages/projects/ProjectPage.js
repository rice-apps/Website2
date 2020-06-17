import React, { Component } from 'react';
import './ProjectsTemplate.css';
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";

const projectName = {
    "beakspeak" : "BeakSpeak.",
    "carpool" : "Carpool.",
    "ccd" : "CCD.",
    "hedwig" : "Hedwig.",
    "riceelections" : "RiceElections.",
    "website" : "Website.",
};

const projectDescription = {
    "beakspeak" : "BeakSpeak is a social media application designed to promote intercollegiate social life at Rice by allowing for anonymous posts and comments, similar to YikYak.",
    "carpool" : "Carpool is an application which assists Rice students in finding carpooling options to travel to airports during holiday seasons.",
    "ccd" : "A matching tool used by the CCD for their Fall and Spring externship programs.",
    "hedwig" : "Hedwig is an application which streamlines the process of delivering food and drinks from Rice businesses such as the Hoot and East West Tea.",
    "riceelections" : "Insert description of project here. Lorem ipsum dolor sit amet, erat postea argumentum id mei, ius quaeque epicurei ut. Doming aperiri fabulas pri id, id dolor percipitur nec, sale error ei per. Dolores",
    "website" : "Building websites for organizations.",
};

const team = {
    "beakspeak" : "Noushin Quazi",
    "carpool" : "Diksha Gupta",
    "ccd" : "TBD",
    "hedwig" : "Jeffrey Wang, Will Mundy",
    "riceelections" : "Shryans Goyal, Danny Andreini",
    "website" : "Shryans Goyal, Danny Andreini, Pranay Mittal, Sharon Sun, Jiin Rhew, Victor Song, Metinee Ding.",
};

const projectScope = {
    "beakspeak" : "NodeJS, React Native, ExpressJS, MongoDB",
    "carpool" : "AngularJS, ExpressJS",
    "ccd" : "User Research, Python, React, Beta Testing",
    "hedwig" : "React Native",
    "riceelections" : "Design, Machine Learning, User Research, Cloud Compiling, Javascript, Beta Testing",
    "website" : "Design, React, Mobile, Javascript, Beta Testing",
};

const problem = {
    "beakspeak" : "We have a lot of residential college pride, which is great because the residential college system does a good job of establishing a warm, welcoming community you come to call family! Unfortunately, this system tends to be socially divisive and at times suffocating. People don't feel encouraged to branch out to engage with the greater Rice society -- this leads to a lot of residential pride and very low Rice pride! Consumer research bears out the view that the residential college system is socially restrictive and that existing social outlets are good at maintaining existing relationships but not at forming new ones. Further, current social outlets carry the burden of identity. Therefore, the problem is that the current health of Rice pride and interconnectivy is poor, and improvement is desired.",
    "carpool" : "Currently, students use a Google Sheets document listing past and future carpool rides that contain the destination, date/time, student’s name, phone number, and other information. Students enter the time they plan to leave Rice or the airport, and if someone else matches with their time, they can contact each other and coordinate a ride. However, this does not have a smooth interface, does not have a way to show time flexibility, lacks security, and does not notify drivers of riders which have joined/left their carpool.",
    "ccd" : "The current externship matching process is opaque, with the introduction of Google Sheets over Excel marking the latest update to the process.",
    "hedwig" : "Currently, there is no effective way for Rice students to buy food from businesses at the Rice Memorial Center like East West Tea and the Hoot other than to travel there in person. Often, this prevents students that would have otherwise bought food from frequenting these establishments.",
    "riceelections" : "Insert description of project here. Lorem ipsum dolor sit amet, erat postea argumentum id mei, ius quaeque epicurei ut. Doming aperiri fabulas pri id, id dolor percipitur nec, sale error ei per. Dolores insolens mea ex, eam definitiones reprehendunt ei, sed eu commune omnesque sadipscing. Diam admodum offendit usu at, ei aperiam interesset quo.",
    "website" : "How can we rebrand RiceApps using the Website by keeping stakeholders involved and helping developers learn industry practices and technologies?",
};

const solution = {
    "beakspeak" : "A number of interviewees expressed nostalgia for products such as YikYak. Therefore, we created BeakSpeak, an application which allows for anonymous posts by Rice students. BeakSpeak authenticates Rice students using Rice IDP and allows user to post and comment anonymously. It also allows students to report problematic or abusive content, balancing anonymity and security.",
    "carpool" : "Carpool is an AngularJS web application aimed to help Rice students by facilitating the process of finding and organizing carpools with other Rice student. The app provides an interface for students to input certain parameters of the ride they wish to carpool on, such as departing and arrival times and locations, to either search and join existing rides or create their own rides on.",
    "ccd" : "Our system will supercharge the productivity of the CCD employees as they match students, by efficiently filtering and sorting candidates so that the employees can select make empowered decisions.",
    "hedwig" : "Hedwig is a React Native application for iOS and Android which allows Rice students to order food and drink from East West Tea and the Hoot. It provides an interface for students to view available items, pay for said items, and view estimated time of delivery.",
    "riceelections" : "Insert description of project here. Lorem ipsum dolor sit amet, erat postea argumentum id mei, ius quaeque epicurei ut. Doming aperiri fabulas pri id, id dolor percipitur nec, sale error ei per. Dolores insolens mea ex, eam definitiones reprehendunt ei, sed eu commune omnesque sadipscing. Diam admodum offendit usu at, ei aperiam interesset quo.",
    "website" : "The Website is a design rebrand of the RiceApps ecosystem to better reflect the organization in its goals, vision, purpose and functions. We created a coherent design style for current and future RiceApps projects. The current website is limited in its design and functionality to effectively communicate RiceApps' organizational dynamics. We made interactions between RiceApps and its stakeholders more efficient using third party integrations like Typeform, while simultaneously retaining RiceApps' identity.",
};



export default class ProjectPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        let page = this.props.page;
        return (
                <div>
                    <NavLink to="/" >
                        <img class="homeIcon" src={require("../../home-icon.png")} />
                    </NavLink>
                    <div className="pageWrapper">
                        <div id="content">
                            <div id="projectName">
                                {projectName[page]}
                            </div>
                            <div class="paragraphs" id="projectDescription">
                                {projectDescription[page]}
                            </div>
                            <div>
                                <div id="teamAndProjectScope" class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" >Team</div>
                                    <div class="paragraphs">{projectName[page]}</div>
                                </div>
                                <div class="paragraphs">
                                    <div class="teamAndProjectScopeLabel" id="projectScope">Project Scope</div>
                                    <div class="paragraphs">
                                        {projectScope[page]}
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div class="caption">THE PROBLEM</div>
                                <div class="captionDescription">
                                    {problem[page]}
                                </div>
                            </div>
                            <div>
                                <div class="caption">OUR SOLUTION</div>
                                <div class="captionDescription">
                                    {solution[ page]}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        )

    }

}
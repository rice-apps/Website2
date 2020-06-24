import React from "react";
import Fade from "react-reveal/Fade";
import "./Projects.css";
import { NavLink } from "react-router-dom";

import box from "../images/box.svg";

const pastProjects = [
	{
		name: "beakspeak",
		projectText: "Rice's anonymous, exclusive social media platform",
		titleID: "BsTitle",
	},
	{
		name: "carpool",
		projectText: "Ride-sharing at Rice made easier",
		titleID: "cTitle",
	},
	{
		name: "website",
		projectText: "Brand creation for organizations",
		titleID: "wTitle",
	},
];

const futureProjects = [
	{
		name: "hedwig",
		projectText: "A revolutionary pickup ordering system for Rice's retail establishments.",
		titleID: "HwTitle",
	},
	{
		name: "pdi",
		projectText: "A new texting experience for low-income patients",
		titleID: "pdiTitle"
	},
	{
		name: "ccd",
		projectText: "An externship matching platform for the CCD",
		titleID: "RTitle",
	},
];

const ProjectBubble = ({ project }) => (
	<div id={project.name}>
		<div id={project.titleID}>
			<div>
				<NavLink to={`/${project.name}`} class="link">
					<h1>{project.name.toLocaleUpperCase()}</h1>
				</NavLink>
			</div>
		</div>
		<div className="circle">
			<img className="airbnb" src={box} alt="" />
			<div className="projectText">
				{project.projectText}
			</div>
		</div>
	</div>
)

const Projects = () => {
	return (
		<div className="projectsPageWrapper">
			<div className="projectTitles">
				<h1 className="ppTitle">Past Projects</h1>
				<h1 className="fpTitle">Future Projects</h1>
			</div>
			<Fade left duration={1500}>
				{pastProjects.map((project) => (
					<ProjectBubble project={project} />
				))}
				{futureProjects.map((project) => (
					<ProjectBubble project={project} />
				))}
			</Fade>
		</div>
	);
};

export default Projects;

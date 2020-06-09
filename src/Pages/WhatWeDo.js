import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import "./WhatWeDo.css";

export default class WhatWeDo extends Component {
	render() {
		return (
			<div>
				<div className="whatWeDoPageWrapper">
					<Parallax offsetYMax={20} offsetYMin={-5}>
						<div id="treeBackground">
							<h1>
								{" "}
								We build web apps that empower students and
								community partners.{" "}
							</h1>
						</div>
					</Parallax>
				</div>
			</div>
		);
	}
}

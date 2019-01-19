import React, { Component } from 'react';
import './ProjectTemplate.css';
import githubMark from '../images/GitHub-Mark-32px.png';

export default class ProjectTemplate extends Component {
  render() {
    return (
      <div className="project-template-wrapper">
        <div id="heading-section">
          <div id="project-icon"></div>
          <div id="project-name">Name</div>
          <div id="github-wrapper">
            <a id="github" href="https://github.com/">
              <img src={githubMark} alt="github-mark" />
            </a>
          </div>
          <div id="achievement">What they did</div>
        </div>
        <div id="bottom-section">
          <div className="column" id="prob-sol">
            <div className="title">Problem Space</div>
            <p id="desc-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in facilisis mi. Proin rhoncus tempus sem non dapibus. Curabitur fermentum, nunc quis blandit consectetur, arcu nibh porta eros, nec molestie nunc libero eget sapien. Nulla euismod mollis velit vitae suscipit. Fusce sagittis feugiat nunc a feugiat. Nunc consectetur ut felis vitae lacinia. Sed sit amet erat sodales, scelerisque sapien et, mollis mi. Sed efficitur, mi sed commodo fermentum, justo lorem convallis ex, et dictum elit ante nec nibh.
                    </p>
            <div className="title">Our Solution</div>
            <p id="desc-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in facilisis mi. Proin rhoncus tempus sem non dapibus. Curabitur fermentum, nunc quis blandit consectetur, arcu nibh porta eros, nec molestie nunc libero eget sapien. Nulla euismod mollis velit vitae suscipit. Fusce sagittis feugiat nunc a feugiat. Nunc consectetur ut felis vitae lacinia. Sed sit amet erat sodales, scelerisque sapien et, mollis mi. Sed efficitur, mi sed commodo fermentum, justo lorem convallis ex, et dictum elit ante nec nibh.
                    </p>
          </div>
          <div className="column" id="tech-used">
            <div className="title">What we did</div>
            <ul id="tech-list">
              <li>Design</li>
              <li>Machine Learning</li>
              <li>Cloud Computing</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

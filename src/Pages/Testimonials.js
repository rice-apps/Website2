import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './Testimonials.css';

export default class LandingPage extends Component {


  render() {
    return (
      <div className="TestmonialsWrapper">

      <div class = "paragraphWrapper">
      <Fade bottom duration = {3000}>
        <div className="TestimonialParagraph">
          "Riceapps was instrumental to my development not only as a developer, but as a <em> leader </em> — I was able to communicate with clients clearly and thoughtfully, while working <em> efficiently </em> with my team. I emerged with a better understanding of the principles used software and product management."
        </div>
      </Fade>
      </div>

      <Fade bottom duration = {3000} delay = {700}>
        <div className="nameWrapper">
          <span>— Shryans Goyal</span>
          <span id="teamLead">Team Lead, Rice U. '21</span>
        </div>
      </Fade>
      </div>
    )

  }

}

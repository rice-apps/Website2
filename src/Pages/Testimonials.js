import React, { Component } from 'react';
import './Testimonials.css';

export default class LandingPage extends Component {


  render() {
    return(
      <div className= "TestmonialsWrapper">
        <div className = "quote">
          Riceapps was instrumental to my development not only as a developer, but as a leader — I was able to communicate with clients clearly and thoughtfully, while working efficiently with my team. I emerged with a better understanding of the principles used software and product management.
        </div>
        <div id = "shryans">
         — Shryans Goyal
        </div>
        <div id="teamLead">
          Team Lead, Rice U. '21
        </div>
      </div> 
  )

  }

}

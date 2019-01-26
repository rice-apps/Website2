import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './AboutUs.css';

export default class AboutUs extends Component {
    render() {
        return(
          <div className="AboutUsWrapper">
              <div id="AboutUsParagraph">
                  {/* <style>
                      @import url('https://fonts.googleapis.com/css?family=Questrial');
                  </style> */}
                  <Fade bottom duration={3000}>
                  <p>
                      We emphasize the <em>product</em> and the <em>process</em> — our developers learn and apply new technologies to custom tailored products that directly impact client organizations.
                  </p>
                  </Fade>
              </div>
          </div>
          )

  }

}

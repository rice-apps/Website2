import React, { Component } from 'react';
import './JoinUs.css';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import * as typeformEmbed from '@typeform/embed';
import Fade from 'react-reveal/Fade';

export default class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.el = null;
    }
    componentDidMount() {
        if (this.el) {
            typeformEmbed.makeWidget(this.el, "https://danny631.typeform.com/to/u3dn70", {
                hideFooter: true,
                hideHeaders: true,
                opacity: 0
            });
        }
    }
  render() {
    return(
    <div>
    {/* <style>@import url('https://fonts.googleapis.com/css?family=Questrial');</style> */}
    <div id = "content-JoinUs">
    <div id = "ContactUsTitle">
    <Fade right duration = {2000}>
    Give us a shot.
    </Fade>
    </div>
    <div id = "ContactUsText">
    <Fade left duration = {2000}>
    WE PROMISE WE'LL EXCEED YOUR EXPECTATIONS.
    </Fade>
    </div>
      <Fade duration = {3000}>
        <div ref={(el) => this.el = el} style={{width: '100%', height: '300px'}} />
      </Fade>
    </div>

    </div>
  )

  }

}

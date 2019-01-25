import React, { Component } from 'react';
import './JoinUs.css';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import * as typeformEmbed from '@typeform/embed'

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
    Give us a shot.
    </div>
    <div id = "ContactUsText">
    WE PROMISE WE'LL EXCEED YOUR EXPECTATIONS.
    </div>
        <div ref={(el) => this.el = el} style={{width: '100%', height: '300px'}} />
    </div>

    </div>
  )

  }

}

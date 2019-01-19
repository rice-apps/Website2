import React, { Component } from 'react';
import './WorkForUs.css';
import * as typeformEmbed from "@typeform/embed";

export default class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.el = null;
    }
    componentDidMount() {
        if (this.el) {
            typeformEmbed.makeWidget(this.el, "https://danny631.typeform.com/to/IP1ebv", {
                hideFooter: true,
                hideHeaders: true,
                opacity: 0
            });
        }
    }
  render() {
    return(
    <div>

    <style>@import url('https://fonts.googleapis.com/css?family=Questrial');</style>
    <div id = "content-WorkForUs">
    <div id = "JoinUsText">
    WE LOVE NEW PEOPLE.
    </div>
    <div id = "JoinUsTitle">
    Help us impact more.
    </div>
        <div ref={(el) => this.el = el} style={{width: '100%', height: '300px'}} />
    </div>

    </div>
  )

  }

}

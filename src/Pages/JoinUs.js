import React, { Component } from 'react';
import './JoinUs.css';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import * as typeformEmbed from '@typeform/embed';
import Fade from 'react-reveal/Fade';

export default class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.el = null;
        this.state = {
            submitted: false,
        };
    }
    componentDidMount() {
        if (this.el) {
            typeformEmbed.makeWidget(this.el, "https://danny631.typeform.com/to/u3dn70", {
                hideFooter: true,
                hideHeaders: true,
                opacity: 0,
                onSubmit: () => {this.setState({submitted : true})}
            });
        }
    }
    render() {
        let typeformDiv = <div ref={(el) => this.el = el} style={{width: '100%', height: '300px', backgroundColor: 'transparent'}} />;
        if (this.state.submitted === true) {
            typeformDiv = <div> </div>
        }

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
                    {typeformDiv}
                </div>


            </div>
        )

    }

}

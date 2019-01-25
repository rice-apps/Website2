import React, { Component } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
export default class MemberForm extends Component {
    render() {


        return(
            <div>
                <ReactTypeformEmbed autoOpen={false} url="https://danny631.typeform.com/to/IP1ebv" />;
            </div>
        )
    }
}

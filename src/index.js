import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App  from './App';
import PartnerForm from './Pages/PartnerForm.js';
import MemberForm from './Pages/MemberForm.js';
import BeakSpeak from './Pages/projects/BeakSpeak.js';
import Hedwig from './Pages/projects/Hedwig.js';
import Carpool from './Pages/projects/Carpool.js';
import Reservations from './Pages/projects/Reservations.js';
import Website from './Pages/projects/Website.js';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/workwithus" component={PartnerForm} />
            <Route path="/joinus" component={MemberForm} />
            <Route path = "/beakspeak" component = {BeakSpeak} />
            <Route path = "/hedwig" component = {Hedwig} />
            <Route path = "/carpool" component = {Carpool} />
            <Route path = "/reservations" component = {Reservations} />
            <Route path = "/website" component = {Website} />
        </div>
    </Router>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App  from './App';
import PartnerForm from './Pages/PartnerForm.js';
import MemberForm from './Pages/MemberForm.js';
import BeakSpeak from './Pages/projects/BeakSpeak.js';
import Website from './Pages/projects/Website.js';
import Reservations from './Pages/projects/Reservations.js';
import Carpool from './Pages/projects/Carpool.js';
import Hedwig from './Pages/projects/Hedwig.js';
import Carpool from './Pages/projects/Carpool.js';
import Reservations from './Pages/projects/Reservations.js';
import Website from './Pages/projects/Website.js';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path = "/beakspeak" component = {BeakSpeak} />
            <Route path = "/website" component = {Website} />
            <Route path = "/reservations" component = {Reservations} />
            <Route path = "/carpool" component = {Carpool} />
            <Route path = "/hedwig" component = {Hedwig} />
        </Switch>
    </Router>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// RiceBikes -> reservations
// RiceElections -> Carpool
serviceWorker.unregister();

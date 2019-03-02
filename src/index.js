import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App  from './App';
import PartnerForm from './Pages/PartnerForm.js';
import MemberForm from './Pages/MemberForm.js';
import BeakSpeak from './Pages/projects/BeakSpeak.js';
import CoffeeHouse from './Pages/projects/CoffeeHouse.js';
import RiceBikes from './Pages/projects/RiceBikes.js';
import RiceElections from './Pages/projects/RiceElections.js';
import Hedwig from './Pages/projects/Hedwig.js';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={App} exact />
            {/*<Route path="/workwithus" component={PartnerForm} />*/}
            {/*<Route path="/joinus" component={MemberForm} />*/}
            <Route path = "/beakspeak" component = {BeakSpeak} />
            <Route path = "/coffeehouse" component = {CoffeeHouse} />
            <Route path = "/ricebikes" component = {RiceBikes} />
            <Route path = "/riceelections" component = {RiceElections} />
            <Route path = "/hedwig" component = {Hedwig} />

        </Switch>
    </Router>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

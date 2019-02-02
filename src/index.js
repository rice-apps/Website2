import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, HashRouter} from 'react-router-dom';
import './index.css';
import App  from './App';
import PartnerForm from './Pages/PartnerForm.js';
import MemberForm from './Pages/MemberForm.js';
import BeakSpeak from './Pages/Projects/BeakSpeak.js';
import ProjectTemplate from './Pages/ProjectTemplate.js';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/workwithus" component={PartnerForm} />
            <Route path="/joinus" component={MemberForm} />
            <Route path = "/project" component = {ProjectTemplate} />
            <Route exact path = "/beakspeak" component = {BeakSpeak} />

        </div>
    </Router>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

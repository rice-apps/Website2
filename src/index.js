import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';
import './index.css';
import App  from './App';
import ProjectPage from './Pages/projects/ProjectPage.js';
// import PartnerForm from './Pages/PartnerForm.js';
// import MemberForm from './Pages/MemberForm.js';

import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';


function GoToProjectPage() {
    let { slug } = useParams();
    return <ProjectPage page={slug} />;
}

ReactDOM.render(
    <Router>
        {/* <ThemeProvider> */}
            <Switch>
                <Route path="/" component={App} exact />
                <Route path = "/:slug" component = {ProjectPage}>
                    <GoToProjectPage />
                </Route>    
            </Switch>
        {/* </ThemeProvider> */}
    </Router>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// RiceBikes -> reservations
// RiceElections -> Carpool
serviceWorker.unregister();

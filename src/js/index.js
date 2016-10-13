import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Affordability from './components/pages/Affordability';
import Decent from './components/pages/Decent';
import Neighbourhood from './components/pages/Neighbourhood';
import Space from './components/pages/Space';
import Stability from './components/pages/Stability';
import Copy from './components/pages/Copy';

import { URLS } from './config';

const handleUpdate = function () {
    window.scrollTo(0, 0);
};

ReactDOM.render(

    <Router history={browserHistory} onUpdate={handleUpdate}>
        <Route path={URLS.baseUrl} component={App}>
            <IndexRoute component={Home}/>
            <Route path={`${URLS.baseUrl}/affordability`} component={Affordability}/>
            <Route path={`${URLS.baseUrl}/decent`} component={Decent}/>
            <Route path={`${URLS.baseUrl}/neighbourhood`} component={Neighbourhood}/>
            <Route path={`${URLS.baseUrl}/space`} component={Space}/>
            <Route path={`${URLS.baseUrl}/stability`} component={Stability}/>
            <Route path={`${URLS.baseUrl}/great-home-debate`} component={Copy}/>
            <Route path={`${URLS.baseUrl}/executive-summary`} component={Copy}/>
            <Route path={`${URLS.baseUrl}/foreword-campbell-ross`} component={Copy}/>
            <Route path={`${URLS.baseUrl}/foreword-british-gas`} component={Copy}/>
            <Route path={`${URLS.baseUrl}/foreword-ipsos-mori`} component={Copy}/>
            <Route path={`${URLS.baseUrl}/contact`} component={Copy}/>
            <Redirect from='*' to={URLS.baseUrl}/>
        </Route>
    </Router>,

document.getElementById('home-standard'));

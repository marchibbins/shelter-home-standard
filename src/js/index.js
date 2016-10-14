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
import ExecutiveSummary from './components/pages/ExecutiveSummary';
import GreatHomeDebate from './components/pages/GreatHomeDebate';
import ForewordShelter from './components/pages/ForewordShelter';
import ForewordBritishGas from './components/pages/ForewordBritishGas';
import ForewordIpsosMori from './components/pages/ForewordIpsosMori';
import ReneesStory from './components/pages/ReneesStory';
import Contact from './components/pages/Contact';

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
            <Route path={`${URLS.baseUrl}/great-home-debate`} component={GreatHomeDebate}/>
            <Route path={`${URLS.baseUrl}/executive-summary`} component={ExecutiveSummary}/>
            <Route path={`${URLS.baseUrl}/foreword-campbell-robb`} component={ForewordShelter}/>
            <Route path={`${URLS.baseUrl}/foreword-british-gas`} component={ForewordBritishGas}/>
            <Route path={`${URLS.baseUrl}/foreword-ipsos-mori`} component={ForewordIpsosMori}/>
            <Route path={`${URLS.baseUrl}/renees-story`} component={ReneesStory}/>
            <Route path={`${URLS.baseUrl}/contact`} component={Contact}/>
            <Redirect from='*' to={URLS.baseUrl}/>
        </Route>
    </Router>,

document.getElementById('home-standard'));

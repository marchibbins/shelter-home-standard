import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Affordability from './components/pages/Affordability';
import Decent from './components/pages/Decent';
import Neighbourhood from './components/pages/Neighbourhood';
import Security from './components/pages/Security';
import Stability from './components/pages/Stability';

const handleUpdate = function () {
    window.scrollTo(0, 0);
};

ReactDOM.render(

    <Router history={browserHistory} onUpdate={handleUpdate}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/affordability" component={Affordability}/>
            <Route path="/decent" component={Decent}/>
            <Route path="/neighbourhood" component={Neighbourhood}/>
            <Route path="/security" component={Security}/>
            <Route path="/stability" component={Stability}/>
            <Redirect from='*' to='/' />
        </Route>
    </Router>,

document.getElementById('home-standard'));

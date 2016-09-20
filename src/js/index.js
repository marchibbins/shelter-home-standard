import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Affordability from './components/pages/Affordability';
import Decency from './components/pages/Decency';
import Neighbourhood from './components/pages/Neighbourhood';
import Space from './components/pages/Space';
import Stability from './components/pages/Stability';

ReactDOM.render(

    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/affordability" component={Affordability}/>
            <Route path="/decency" component={Decency}/>
            <Route path="/neighbourhood" component={Neighbourhood}/>
            <Route path="/space" component={Space}/>
            <Route path="/stability" component={Stability}/>
            <Redirect from='*' to='/' />
        </Route>
    </Router>,

document.getElementById('home-standard'));

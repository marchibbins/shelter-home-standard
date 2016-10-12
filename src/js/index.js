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
            <Route path="/space" component={Space}/>
            <Route path="/stability" component={Stability}/>
            <Route path="/great-home-debate" component={Copy}/>
            <Route path="/executive-summary" component={Copy}/>
            <Route path="/foreword-campbell-ross" component={Copy}/>
            <Route path="/foreword-british-gas" component={Copy}/>
            <Route path="/foreword-ipsos-mori" component={Copy}/>
            <Route path="/shelter-british-gas" component={Copy}/>
            <Route path="/contributors" component={Copy}/>
            <Route path="/contact" component={Copy}/>
            <Redirect from='*' to='/'/>
        </Route>
    </Router>,

document.getElementById('home-standard'));

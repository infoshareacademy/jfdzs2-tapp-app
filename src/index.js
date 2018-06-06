import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Routes/home.js';
import Contact from "./Routes/Contacts/contact";
import Dashboard from "./Routes/Dashboard/dashboard";
import Favorites from "./Routes/Favorites/favorites";
import Match from "./Routes/Match/match";
import Settings from "./Routes/Settings/settings";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Contacts/contact' component={Contact}/>
            <Route path="/Dashboard/dashboard" component={Dashboard} />
            <Route path="/Favorites/favorites" component={Favorites} />
            <Route path="/Match/match" component={Match} />
            <Route path="/Settings/Settings" component={Settings} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch, } from 'react-router-dom';
import Home from './Routes/home.js';
import Contact from "./Routes/Contacts/contact";
import Dashboard from "./Routes/Dashboard/dashboard";
import Favorites from "./Routes/Favorites/favorites";
import Match from "./Routes/Match/match";
import Settings from "./Routes/Settings/settings";
import Login from "./Routes/Login/login";




ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact}/>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/favorites' component={Favorites} />
            <Route path='/match' component={Match} />
            <Route path='/settings' component={Settings} />
            <Route path='/login' component={Login} />

        </Switch>
    </BrowserRouter>, document.getElementById('root'));

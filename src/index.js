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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from "./Components/navbar/Navbar.component";


ReactDOM.render(
    <MuiThemeProvider>
    <BrowserRouter>
        <Switch>
            <Navbar/>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact}/>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/favorites' component={Favorites} />
            <Route path='/match' component={Match} />
            <Route path='/settings' component={Settings} />
        </Switch>
    </BrowserRouter>
    </MuiThemeProvider>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

import Admin from './AdminView/App.js';
import Guest from './GuestView/App.js'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage.js';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact component={LandingPage} />
        <Route path="/homepage" component={Guest} />
        <Route path="/admin" component={Admin} />
    </BrowserRouter>
    ,
    document.querySelector('#root')
);

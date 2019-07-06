import React from 'react';
import ReactDOM from 'react-dom';

import Admin from './AdminView/App.js';
import Guest from './GuestView/App.js'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact component={Guest} />
        <Route path="/admin" component={Admin} />
    </BrowserRouter>
    ,
    document.querySelector('#root')
);

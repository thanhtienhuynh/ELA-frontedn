import React from 'react';
import ReactDOM from 'react-dom';

import Admin from './AdminView/App.js';
import Guest from './GuestView/App.js'

ReactDOM.render(
    <Admin />,
    document.querySelector('#root')
);
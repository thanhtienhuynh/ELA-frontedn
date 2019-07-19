import React from 'react';
import Header from './header/Header'
import Footer from './footer/Footer'
import {Route, BrowserRouter} from 'react-router-dom'
import HomePage from './HomePage';
const App = () => {
    return(
        <div>
            <div>
                <BrowserRouter>
                    <Route path="/homepage" component={Header} />
                    <Route path="/homepage" exact component={HomePage} />
                    <Route path="/homepage" component={Footer} />
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
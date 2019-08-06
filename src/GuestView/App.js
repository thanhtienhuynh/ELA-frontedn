import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import LecturePage from './Lecture/LecturePage/LecturePage'
import CoursePage from './Course/CoursePage/CoursePage'
import {Route, BrowserRouter} from 'react-router-dom'
import HomePage from './HomePage';
const App = () => {
    return(
            <div>
                <BrowserRouter>
                    <Route path="/homepage" component={Header} />
                    <Route path="/homepage/courses" component={CoursePage} />
                    <Route path="/homepage/lectures" component={LecturePage} />
                    <Route path="/homepage" exact component={HomePage} />
                    <Route path="/homepage" component={Footer} />
                </BrowserRouter>
            </div>
    );
}

export default App;
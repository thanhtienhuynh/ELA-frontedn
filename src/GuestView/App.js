import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import LecturePage from './Lecture/LecturePage/LecturePage'
import CoursePage from './Course/CoursePage/CoursePage'
import NewPage from './News/NewPage/NewPage'
import {Route, BrowserRouter} from 'react-router-dom'
import HomePage from './HomePage';
const App = () => {
    return(
            <div>
                <BrowserRouter>
                    <Route path="/homepage" component={Header} />
                    <Route path="/homepage/courses" exact component={CoursePage} />
                    <Route path="/homepage/lectures" exact component={LecturePage} />
                    <Route path="/homepage/news" exact component={NewPage} />
                    <Route path="/homepage" exact component={HomePage} />
                    <Route path="/homepage"  exact component={Footer} />
                </BrowserRouter>
            </div>
    );
}

export default App;
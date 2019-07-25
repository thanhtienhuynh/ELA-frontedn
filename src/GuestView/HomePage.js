import React from 'react';
import Course from './Course/Course'
import Lecture from './Lecture/Lecture'
import News from './News/News'
import Comments from './Comments/Comments'
import AboveFooter from './AboveFooter/AboveFooter'
const HomePage = () => {
    return (
        <div>
            <Course></Course>
            <Lecture></Lecture>
            <News></News>
            <Comments></Comments>
            <AboveFooter></AboveFooter>
        </div>
    );
}

export default HomePage;
import React from 'react';
import Course from './Course/Course'
import Lecture from './Lecture/Lecture'
import TabSegment from './TabSegment/TabSegment'
import AboveFooter from './AboveFooter/AboveFooter'
import { Image } from 'semantic-ui-react'
const HomePage = () => {
    return (
        <div>
            <Image fluid src="http://wish.edu.vn/wp-content/uploads/2017/08/Banner-ti%E1%BA%BFng-anh-c%C6%A1-b%E1%BA%A3n.png" />
            <Course></Course>
            <Lecture></Lecture>
            <TabSegment></TabSegment>
            <AboveFooter></AboveFooter>
        </div>
    );
}

export default HomePage;
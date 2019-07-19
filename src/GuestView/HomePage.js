import React from 'react';
import Course from './course/Course'
import Lecture from './lecture/Lecture'
import TabSegment from './tabsegment/TabSegment'
import StepUse from './stepuse/StepUse'
import {Input, Segment} from 'semantic-ui-react'
const HomePage = () => {
    return (
        <div>
            <Segment>
                <Input fluid type="text" size="big" icon="search" iconPosition="left" placeholder="Search anything..." style={{'marginTop':'1em'}}/>
            </Segment>
            <Course></Course>
            <Lecture></Lecture>
            <TabSegment></TabSegment>
            <StepUse></StepUse>
        </div>
    );
}

export default HomePage;
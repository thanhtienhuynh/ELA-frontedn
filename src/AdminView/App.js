import React from 'react'
import MenuBar from './MenuBar/MenuBar'
import Header from './Header/Header'
import { Grid } from 'semantic-ui-react'
import SegmentProfile from './Segment/Admin/SegmentProfile'
import SegmentDashboard from './Segment/Dashboard/SegmentDashboard'
import { BrowserRouter, Route } from 'react-router-dom'
import SegmentCreateNews from './Segment/News/SegmentCreateNews'
import SegmentViewNews from './Segment/News/SegmentViewNews'
import SegmentCreateAccount from './Segment/Account/SegmentCreateAccount'
import SegmentViewAccount from './Segment/Account/SegmentViewAccount'
import SegmentCreateClass from './Segment/Class/SegmentCreateClass'
import SegmentViewClass from './Segment/Class/SegmentViewClass'
import SegmentCreateExam from './Segment/Exam/SegmentCreateExam'
import SegmentViewExam from './Segment/Exam/SegmentViewExam'
import SegmentCreateCourse from './Segment/Course/SegmentCreateCourse'
import SegmentViewCourse from './Segment/Course/SegmentViewCourse'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/admin" component={Header} />
                <Grid>
                    <Grid.Column stretched width={3}>
                        <Route path="/admin" component={MenuBar} />
                    </Grid.Column>
                    <Grid.Column stretched width={13}>
                        <Route path="/admin/dashboard" exact component={SegmentDashboard} />
                        <Route path="/admin" exact component={SegmentProfile} />
                        <Route path="/admin/news/create" exact component={SegmentCreateNews} />
                        <Route path="/admin/news/view" exact component={SegmentViewNews} />
                        <Route path="/admin/account/create" exact component={SegmentCreateAccount} />
                        <Route path="/admin/account/view" exact component={SegmentViewAccount} />
                        <Route path="/admin/class/create" exact component={SegmentCreateClass} />
                        <Route path="/admin/class/view" exact component={SegmentViewClass} />
                        <Route path="/admin/exam/create" exact component={SegmentCreateExam} />
                        <Route path="/admin/exam/view" exact component={SegmentViewExam} />
                        <Route path="/admin/course/create" exact component={SegmentCreateCourse} />
                        <Route path="/admin/course/view" exact component={SegmentViewCourse} />
                    </Grid.Column>
                </Grid>
            </BrowserRouter>
        </div>
    );
}

export default App;
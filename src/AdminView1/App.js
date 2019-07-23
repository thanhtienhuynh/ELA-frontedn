import React from 'react';
import MenuBar from './MenuBar/MenuBar';
import Header from './Header/Header';
import { Grid } from 'semantic-ui-react';
import SegmentProfile from './Segment/Admin/SegmentProfile';
import SegmentDashboard from './Segment/SegmentDashboard';
import { BrowserRouter, Route } from 'react-router-dom'
import SegmentCreateNews from './Segment/News/SegmentCreateNews'
import SegmentViewNews from './Segment/News/SegmentViewNews'
import SegmentCreateAccount from './Segment/Account/SegmentCreateAccount'
import SegmentViewAccount from './Segment/Account/SegmentViewAccount'
import SegmentCreateClass from './Segment/Class/SegmentCreateClass'
import SegmentViewClass from './Segment/Class/SegmentViewClass';
import SegmentUpdateClass from './Segment/Class/SegmentUpdateAccount';
import SegmentCreateExam from './Segment/Exam/SegmentCreateExam';
import SegmentViewExam from './Segment/Exam/SegmentViewExam';
import SegmentUpdateExams from './Segment/Exam/SegmentUpdateExam';

const App = () => {
    return (
        <div>

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
                            <Route path="/admin/class/update" exact component={SegmentUpdateClass} />
                            <Route path="/admin/exam/create" exact component={SegmentCreateExam} />
                            <Route path="/admin/exam/view" exact component={SegmentViewExam} />
                            <Route path="/admin/exam/update" exact component={SegmentUpdateExams} />
                        </Grid.Column>
                    </Grid>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
import React from 'react';
import MenuBar from './menubar/MenuBar1';
import Header from './header/Header';
import { Grid } from 'semantic-ui-react';
import SegmentProfile from './segment/Admin/SegmentProfile';
import SegmentDashboard from './segment/SegmentDashboard';
import { BrowserRouter, Route } from 'react-router-dom'
import SegmentCreateNews from './segment/News/SegmentCreateNews'
import SegmentViewNews from './segment/News/SegmentViewNews'
import SegmentUpdateNews from './segment/News/SegmentUpdateNews'
import SegmentCreateAccount from './segment/Account/SegmentCreateAccount'
import SegmentViewAccount from './segment/Account/SegmentViewAccount'
import SegmentCreateClass from './segment/Class/SegmentCreateClass'
import SegmentViewClass from './segment/Class/SegmentViewClass';
import SegmentUpdateClass from './segment/Class/SegmentUpdateAccount';
import SegmentCreateExam from './segment/Exam/SegmentCreateExam';
import SegmentViewExam from './segment/Exam/SegmentViewExam';
import SegmentUpdateExams from './segment/Exam/SegmentUpdateExam';

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
                            <Route path="/admin/news/update" exact component={SegmentUpdateNews} />
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
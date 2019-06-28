import React from 'react';
import MenuBar from './menubar/MenuBar';
import Header from './header/Header';
import './App.css';
import { Grid } from 'semantic-ui-react';
import SegmentArea from './segment/Segment'
import SegmentProfile from './segment/SegmentProfile';
import SegmentAttendance from './segment/SegmentAttendance';
import SegmentClass from './segment/SegmentClass';
import SegmentDashboard from './segment/SegmentDashboard';
import SegmentStudent from './segment/SegmentStudent';
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Header />
            <div>
                <BrowserRouter>
                    <Grid>
                        <Grid.Column stretched width={3}>
                            <MenuBar />
                        </Grid.Column>
                        <Grid.Column stretched width={13}>
                            <Route path="/" exact component={SegmentDashboard} />
                            <Route path="/admin/profile" exact component={SegmentProfile} />
                            <Route path="/admin/student" exact component={SegmentStudent} />
                            <Route path="/admin/class" exact component={SegmentClass} />
                            <Route path="/admin/attendance" exact component={SegmentAttendance} />
                            <Route path="/admin/teacher" exact component={SegmentArea} />
                            <Route path="/admin/course" exact component={SegmentArea} />
                            <Route path="/admin/mark" exact component={SegmentArea} />
                            <Route path="/admin/exam" exact component={SegmentArea} />
                            <Route path="/admin/new" exact component={SegmentArea} />
                            <Route path="/admin/timetable" exact component={SegmentArea} />
                            <Route path="/admin/history" exact component={SegmentArea} />
                        </Grid.Column>
                    </Grid>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
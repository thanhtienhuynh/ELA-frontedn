import React from 'react';
import MenuBar from './menubar/MenuBar';
import Header from './header/Header';
import { Grid } from 'semantic-ui-react';
import SegmentArea from './segment/Segment'
import SegmentProfile from './segment/Admin/SegmentProfile';
import SegmentAttendance from './segment/SegmentAttendance';
import SegmentClass from './segment/SegmentClass';
import SegmentDashboard from './segment/SegmentDashboard';
import SegmentStudent from './segment/SegmentStudent';
import { BrowserRouter, Route } from 'react-router-dom'
import SegmentNews from './segment/News/SegmentNews'

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
                            <Route path="/admin/news/create" exact component={SegmentNews} />
                            <Route path="/admin/news/update" exact component={SegmentNews} />
                            <Route path="/admin/news/view" exact component={SegmentNews} />
                        </Grid.Column>
                    </Grid>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
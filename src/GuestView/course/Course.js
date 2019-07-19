import React from 'react';
import {Input, Header, Grid, Icon, Rating, Button} from 'semantic-ui-react';
import SegmentCourse from './segmentcourse/SegmentCourse';
const styleCourse = {'marginTop': '1em', 'marginLeft' : '1em', 'marginRight': '1em'}
const Course = () => {
    return (
        <div style={styleCourse}>
            <Header as='h2' icon textAlign='center'>
            <Icon name='book' circular />
            <Header.Content>Course</Header.Content>
            </Header>
            <Grid columns='six' divided>
                <Grid.Row>
                    <Grid.Column>
                        <SegmentCourse title="summit 1">
                            <Rating icon='star' defaultRating={3} maxRating={4} />
                        </SegmentCourse>
                    </Grid.Column>
                    <Grid.Column>
                        <SegmentCourse title="TN3">
                            <Rating icon='star' defaultRating={3.5} maxRating={4} />  
                        </SegmentCourse>
                    </Grid.Column>
                    <Grid.Column>
                        <SegmentCourse title="dd">
                            <Rating icon='star' defaultRating={3} maxRating={4} />
                        </SegmentCourse>
                    </Grid.Column>
                    <Grid.Column>
                        <SegmentCourse title="i">
                            <Rating icon='star' defaultRating={3} maxRating={4} />
                        </SegmentCourse>
                    </Grid.Column>
                    <Grid.Column>
                        <SegmentCourse title="ff">
                            <Rating icon='star' defaultRating={3} maxRating={4} />
                        </SegmentCourse>
                    </Grid.Column>
                    <Grid.Column>
                        <SegmentCourse title="xx">
                            <Rating icon='star' defaultRating={3} maxRating={4} />
                        </SegmentCourse>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <div style={{'marginTop':'1em'}}>
                <Input focus placeholder="Find course..." icon="search" size="big"/>
                <Button size="big" color="red" style={{'float': 'right'}}>More Course</Button>
            </div>
            

        </div>
    );
}

export default Course;
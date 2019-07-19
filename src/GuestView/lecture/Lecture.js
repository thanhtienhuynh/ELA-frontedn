import React from 'react';
import {Header, Grid, Button} from 'semantic-ui-react';
import LectureDetail from './lecturedetail/LectureDetail'
import DimmerImg from './dimmerimg/DimmerImg';
const styleCourse = {'marginTop': '1em', 'marginLeft' : '1em', 'marginRight': '1em'}
const Lecture = () => {
    return (
        <div style={styleCourse}>
            <Header as='h2' image='https://react.semantic-ui.com/images/icons/school.png' content='Lecture' textAlign="center"/>
            <Grid columns="5">
                <Grid.Row>
                    <Grid.Column>
                        <LectureDetail>
                            <DimmerImg />
                        </LectureDetail>
                    </Grid.Column>
                    <Grid.Column>
                        <LectureDetail>
                            <DimmerImg />
                        </LectureDetail>
                    </Grid.Column>
                    <Grid.Column>
                        <LectureDetail>
                            <DimmerImg />
                        </LectureDetail>
                    </Grid.Column>
                    <Grid.Column>
                        <LectureDetail>
                            <DimmerImg />
                        </LectureDetail>
                    </Grid.Column>
                    <Grid.Column>
                        <LectureDetail>
                            <DimmerImg />
                        </LectureDetail>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Button size="big" color="green" style={{'marginTop':'1em'}}>See More</Button>
        </div>
    )
}

export default Lecture;
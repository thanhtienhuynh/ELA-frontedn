import React from 'react';
import {Segment, Grid, Header, Image, Button} from 'semantic-ui-react'
const Content2 = () => {
    return (
        <div>
            <Segment style={{ padding: '2em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                We have highly qualified teachers!
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                We have dedicated teachers who are experienced in teaching and always bring attractive and creative lectures.
                                Each class has two teachers to be able to care for all students.
                            </p>
                            <Button primary>See more</Button>
                        </Grid.Column>
                        <Grid.Column width={6} floated="right">
                            <Image bordered rounded size='large' src='https://edu2review.com/upload/school-images/trung-tam-tu-hoc-tieng-anh-x3english/img/792w-1-trung-tam-tu-hoc-tieng-anh-x3english.jpg' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
}

export default Content2;
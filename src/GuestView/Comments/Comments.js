import React from 'react';
import {Grid, Image, Header, Container, Segment, Divider} from 'semantic-ui-react'
const Comments = () => {
    return (
        <div>
            <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
                <a href="#1">Parents and Students say about ELA</a>
            </Divider>
            <Grid columns="equal" divided>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment>
                            <Header textAlign="center" as='h2'>
                                <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                            </Header>
                            <Container textAlign="justified">
                                We can help you improve your English skills includes: Reading, Speaking, Writing and Listening. 
                                We create an environment where you not only improve your English skills but also develop many other soft skills.
                                Our facilities are equipped with state-of-the-art equipment.
                            </Container>
                            <Container textAlign="right">
                                <b>Patrick - Student</b>
                            </Container>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <Header textAlign="center" as='h2'>
                                <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                            </Header>
                            <Container textAlign="justified">
                                We can help you improve your English skills includes: Reading, Speaking, Writing and Listening. 
                                We create an environment where you not only improve your English skills but also develop many other soft skills.
                                Our facilities are equipped with state-of-the-art equipment.
                            </Container>
                            <Container textAlign="right">
                                <b>Patrick - Student</b>
                            </Container>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <Header textAlign="center" as='h2'>
                                <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                            </Header>
                            <Container textAlign="justified">
                                We can help you improve your English skills includes: Reading, Speaking, Writing and Listening. 
                                We create an environment where you not only improve your English skills but also develop many other soft skills.
                                Our facilities are equipped with state-of-the-art equipment.
                            </Container>
                            <Container textAlign="right">
                                <b>Patrick - Student</b>
                            </Container>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default Comments;
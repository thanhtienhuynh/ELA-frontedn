import React from 'react';
import {Image, Grid, Divider,Header, Segment, Button} from 'semantic-ui-react'
const LandingPageContent = () => {
    return (
        <div style={{'marginTop':'1em'}}>
            <Segment style={{ padding: '2em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Welcome to our English Center!
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                We can help you improve your English skills includes: Reading, Speaking, Writing and Listening.
                                We create an environment where you not only improve your English skills but also develop many other soft skills.
                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Morden Learning Enviroment
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Our facilities are equipped with state-of-the-art equipment. 
                            </p>
                            <Button primary>See more</Button>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='massive' src='https://giasuviet.com.vn/app/uploads/2016/10/Gia-s%C6%B0-Ti%E1%BA%BFng-Anh-l%E1%BB%9Bp-5-uy-t%C3%ADn-H%C3%A0-N%E1%BB%99i.jpg' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
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
            <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
                <a href="#">Course Detail</a>
            </Divider>
            <Grid columns="3" >
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <Image centered circular src="https://vus.edu.vn/Assets/images/find_maugiao.png" size="medium"/>
                        <p style={{ fontSize: '1.33em', 'marginTop':'0.5em'}}>3 - 6 years old</p>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Image centered circular src="https://vus.edu.vn/Assets/images/find_6_9.png" size="medium"/>
                        <p style={{ fontSize: '1.33em', 'marginTop':'0.5em' }}>6 - 12 years old</p>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Image centered circular src="https://vus.edu.vn/Assets/images/find_10_12.png" size="medium"/>
                        <p style={{ fontSize: '1.33em', 'marginTop':'0.5em' }}>12 - 16 years old</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default LandingPageContent;
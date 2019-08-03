import React from 'react';
import Course from './Course/Course'
import Lecture from './Lecture/Lecture'
import News from './News/News'
import Comments from './Comments/Comments'
import AboveFooter from './AboveFooter/AboveFooter'
import {Image, Grid, Icon, Step} from 'semantic-ui-react'
const HomePage = () => {
    return (
        <div>
            <Grid padded columns={2}>
                <Grid.Row stretched >
                    <Grid.Column width={9}>
                        <Image src="https://banner2.kisspng.com/20180219/bve/kisspng-skyline-silhouette-illustration-vector-london-building-5a8b75dc0099e3.2131424415190891160025.jpg"/>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Step.Group vertical>
                            <Step completed>
                                <Icon name='truck' />
                                <Step.Content>
                                    <Step.Title>100% Courses in English</Step.Title>
                                    <Step.Description>Our courses are bought from famous universities in US, UK</Step.Description>
                                </Step.Content>
                            </Step>
                            <Step completed>
                                <Icon name='truck' />
                                <Step.Content>
                                    <Step.Title>English Communication Environment</Step.Title>
                                    <Step.Description>We create the best conditions for students to exchange in English</Step.Description>
                                </Step.Content>
                            </Step>
                            <Step completed>
                                <Icon name='truck' />
                                <Step.Content>
                                    <Step.Title>Enthusiastic, Experienced teachers</Step.Title>
                                    <Step.Description>
                                        Teachers have a lot of experience in developing comprehensive English skills
                                    </Step.Description>
                                </Step.Content>
                            </Step>
                        </Step.Group>
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
            <Course></Course>
            <Lecture></Lecture>
            <News></News>
            <Comments></Comments>
            <AboveFooter></AboveFooter>
        </div>
    );
}

export default HomePage;
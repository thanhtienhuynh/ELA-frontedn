import React from 'react';
import Head from './header/Header'
import ContainerIntroduction from './containerintroduction/ContainerIntroduction'
import ContainerContent from './landingpage_content/LandingpageContent'
import AboveFooter from '../GuestView/abovefooter/AboveFooter'
import Footer from '../GuestView/footer/Footer';
import News from '../GuestView/news/News';
import {Header, Grid, Segment} from 'semantic-ui-react';
import Comments from '../GuestView/comments/Comments';
const LandingPage = () => {
    return (
        <div>
            <Head></Head>
            <ContainerIntroduction></ContainerIntroduction>
            <ContainerContent></ContainerContent>
            <Grid columns="equal">
                <Grid.Row >
                    <Grid.Column>
                        <Header content="News" as="h1" textAlign="center"/>
                        <News />
                    </Grid.Column>
                    <Grid.Column>
                        <Header content="Comments" as="h1" textAlign="center"/>
                        <Segment>
                            <Comments />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <AboveFooter />
            <Footer />
        </div>
    );
}

export default LandingPage;
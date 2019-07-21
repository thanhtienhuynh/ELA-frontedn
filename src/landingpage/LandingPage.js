import React from 'react';
import Head from './Header/Header'
import ContainerIntroduction from './ContainerIntroduction/ContainerIntroduction'
import ContainerContent from './LandingPageContent/LandingpPageContent'
import AboveFooter from '../GuestView/AboveFooter/AboveFooter'
import Footer from '../GuestView/Footer/Footer';
import News from '../GuestView/News/News';
import {Header, Grid, Segment} from 'semantic-ui-react';
import Comments from '../GuestView/Comments/Comments';
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
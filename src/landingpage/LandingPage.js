import React from './node_modules/react';
import Head from './header/Header'
import ContainerIntroduction from './ContainerIntroduction/ContainerIntroduction'
import ContainerContent from './landingpage_content/LandingpageContent'
import AboveFooter from '../GuestView/AboveFooter/AboveFooter'
import Footer from '../GuestView/Footer/Footer';
import News from '../GuestView/news/News';
import {Header, Grid, Segment} from './node_modules/semantic-ui-react';
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
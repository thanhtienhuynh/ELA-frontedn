import React from 'react';
import Head from './Header/Header'
import ContainerIntroduction from './ContainerIntroduction/ContainerIntroduction'
import ContainerContent from './LandingPageContent/LandingpPageContent'
import AboveFooter from '../GuestView/AboveFooter/AboveFooter'
import Footer from '../GuestView/Footer/Footer';
import News from '../GuestView/News/News';
import Comments from '../GuestView/Comments/Comments';
const LandingPage = () => {
    return (
        <div>
            <Head></Head>
            <ContainerIntroduction></ContainerIntroduction>
            <ContainerContent></ContainerContent>
            <News />
            <Comments />
            <AboveFooter />
            <Footer />
        </div>
    );
}

export default LandingPage;
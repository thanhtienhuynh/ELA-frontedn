import React from 'react';
import Header from './header/Header'
import Content from './content/Content'
import MainContent from './maincontent/MainContent'
import StepUse from '../GuestView/stepuse/StepUse';
import Footer from '../GuestView/footer/Footer';
import News from '../GuestView/news/News';
const LandingPage = () => {
    return (
        <div>
            <Header></Header>
            <Content></Content>
            <MainContent></MainContent>
            <News />
            <StepUse />
            <Footer />
        </div>
    );
}

export default LandingPage;
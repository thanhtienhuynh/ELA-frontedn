import React from './node_modules/react'
import { Container, Header, Icon } from "./node_modules/semantic-ui-react";
const styleFooter = {'paddingTop':'1em', 'textAlign':'center', 'backgroundColor':'rgb(25, 25, 25)', 'color':'white'}
const Footer = () => {
    return (
        <Container fluid style={styleFooter}>
            <Header as="h1" textAlign="center" color="olive"><Icon name="audible"/>Udemy</Header>
            <p>Sine 2019</p>
            <p>Quang Trung Park, 12 District HCMC</p>
            <p>Phone: 0335579880</p>
        </Container>
    );
};

export default Footer;
import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Header, Button, Icon, Grid} from 'semantic-ui-react'
const styleContent = {'paddingTop':'5em', 'paddingBottom':'5em', 'backgroundColor':'#1b1c1d'}
const Content = () => {
    return (
        <Container fluid style={styleContent}>
            <Header as="h1" textAlign="center" color="olive" size="large" style={{'fontSize': '4em'}}><Icon name="audible"/>Udemy</Header>
            <Header as="h2" textAlign="center" color="grey" style={{'marginBottom':'2em'}}>Trung tam Tieng Anh cua anh Tien</Header>
            <Grid>
                <Grid.Column textAlign="center">
                    <Button primary size="huge" as={Link} to='/homepage'>GET STARTED<Icon name="arrow right" /></Button>
                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default Content;
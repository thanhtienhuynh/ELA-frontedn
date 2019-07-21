import React from './node_modules/react';
import {Grid, Image, Header} from './node_modules/semantic-ui-react'
const Comments = () => {
    return (
        <Grid verticalAlign="middle" divided="vertically">
            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size="small"/>
                </Grid.Column>
                <Grid.Column width={13} style={{'textAlign':'right'}}>
                    <Header as="h1">Calar</Header>
                    <p>The course is so good</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column width={13}>
                    <Header as="h1">Calar</Header>
                    <p>The course is so good</p>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size="small" floated="right"/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size="small"/>
                </Grid.Column>
                <Grid.Column width={13} style={{'textAlign':'right'}}>
                    <Header as="h1">Calar</Header>
                    <p>The course is so good</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={13}>
                    <Header as="h1">Calar</Header>
                    <p>The course is so good</p>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src="https://react.semantic-ui.com/images/wireframe/square-image.png" size="small" floated="right"/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Comments;
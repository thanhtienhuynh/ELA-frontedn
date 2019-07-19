import React from 'react';
import {Image, Grid, Header, Segment, Button} from 'semantic-ui-react'
const Content1 = () => {
    return (
        <div>
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
        </div>
    )
}

export default Content1;
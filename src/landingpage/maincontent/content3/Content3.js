import React from 'react';
import {Grid, Image, Header, Divider} from 'semantic-ui-react';
const Content3 = () => {
    return (
        <div>
            <Header content="Detail Courses" as='h3' style={{ fontSize: '2em' }} textAlign="center"/>
            <Grid columns="3" >
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <Image centered circular src="https://vus.edu.vn/Assets/images/find_maugiao.png" size="medium"/>
                        <p style={{ fontSize: '1.33em', 'marginTop':'0.5em'}}>3 - 6 years old</p>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Image centered circular src="https://vus.edu.vn/Assets/images/find_6_9.png" size="medium"/>
                        <p style={{ fontSize: '1.33em', 'marginTop':'0.5em' }}>6 - 12 years old</p>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Image centered circular src="https://vus.edu.vn/Assets/images/find_10_12.png" size="medium"/>
                        <p style={{ fontSize: '1.33em', 'marginTop':'0.5em' }}>12 - 16 years old</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider
                as='h4'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
                <a href='#'>Get Started</a>
            </Divider>
        </div>
    );
}

export default Content3
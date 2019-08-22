import React from 'react';
import {Link} from 'react-router-dom';
import {Divider, Grid, Button} from 'semantic-ui-react';
import OwlCarouselLecture from './OwlCarouselLecture';
import data from './data/data'
const styleLecture = {'marginTop': '1em', 'marginLeft' : '1em', 'marginRight': '1em'}
const properties = data.properties.slice(0, 6);
const Lecture = () => {
    return (
        <div style={styleLecture}>
            <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
                <a href="homepage/lectures">Lectures</a>
            </Divider>
            <OwlCarouselLecture properties={properties} />
            <Grid style={{'marginTop':'1em'}}>
                <Grid.Column textAlign='center'>
                    <Button primary as={Link} size='big' to="/homepage/lectures">See all lectures</Button>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Lecture;
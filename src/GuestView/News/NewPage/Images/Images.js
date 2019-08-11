import React from 'react';
import {Divider, Grid, Segment} from 'semantic-ui-react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import data from './data/Data'
const images = data.PostsData;
const Images = () => {
    const CarouselBar = images.map(image => {
        return (<div key={image._id}>
            <img src={image.image} alt={image._id}/>
            <p className="legend">{image.lehend}</p>
        </div>)
    })
    return (
        <div>
            <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '1.5em 0em', textTransform: 'uppercase', 'color': 'white' }}
            >
                Images
            </Divider>
            <Grid>
                <Grid.Row>
                    <Grid.Column width="3"/>
                    <Grid.Column width="10" textAlign="center">
                        <Segment>
                            <Carousel useKeyboardArrows infiniteLoop >
                                {CarouselBar}
                            </Carousel>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width="3"/>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Images;
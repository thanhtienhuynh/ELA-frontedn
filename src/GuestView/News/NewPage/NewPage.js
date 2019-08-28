import React from 'react'
import LastNew from './LastNewComponent/LastNew'
import NewCourse from './NewCourse/NewCourse'
import Images from './Images/Images'
import NewActivity from './NewActivity/NewActivity'
import Comments from '../../Comments/Comments'
import Footer from '../../Footer/Footer'
import ScrollAnimation from 'react-animate-on-scroll';
import {Embed, Segment, Grid, Divider} from 'semantic-ui-react'
const NewPage = () => {
    return (
        <div style={{'backgroundColor': 'black'}}>
            <LastNew />
            <Divider
                    as='h1'
                    className='header'
                    horizontal
                    style={{ margin: '1.5em 0em', textTransform: 'uppercase', 'color': 'white' }}
                >
                    About Us
                </Divider>
            <Grid>
                <Grid.Row>
                    <Grid.Column width="3">

                    </Grid.Column>
                    <Grid.Column width="10" textAlign="center" verticalAlign="middle">
                        <ScrollAnimation 
                            animateIn='bounceInRight'
                            animateOut='bounceOutLeft'
                        >
                            <Segment vertical>
                                <Embed id='O6Xo21L0ybE' placeholder='https://source.unsplash.com/user/erondu/600x400' source='youtube' />
                            </Segment>
                        </ScrollAnimation>
                    </Grid.Column>
                    <Grid.Column width="3">

                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <NewCourse />
            </ScrollAnimation>
            <ScrollAnimation 
                animateIn='bounceInLeft'
                animateOut='bounceOutRight'
            >
                <Images />
            </ScrollAnimation>
            <NewActivity />
            <ScrollAnimation animateIn="flipInX">
                <Comments />
            </ScrollAnimation>
            <Footer />
        </div>
    );
}

export default NewPage;
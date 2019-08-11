import React from 'react'
import {Grid, Header} from 'semantic-ui-react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import data from '../../data/data';
import CardNew from './CardNew';
import ScrollAnimation from 'react-animate-on-scroll';
const cards = data.PostsData;
const LastNew = () => {
    const listCards = cards.map(card => {
        return <div className="item" key={card._id}><CardNew card={card}/></div>
    })
    return (
        
        <div style={{'paddingTop': '3em'}}>
            <Grid>
                <Grid.Row>
                    <Grid.Column width="2">

                    </Grid.Column>
                    <Grid.Column width={2} textAlign="justified" verticalAlign="middle">
                        <ScrollAnimation animateIn="bounceInLeft">
                            <Header as="h1" style={{'fontSize': '3em', 'color': 'white'}}>Lastest<br />News</Header>
                        </ScrollAnimation>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <OwlCarousel
                            className="owl-theme"
                            loop
                            margin={15}
                            autoplay={true}
                            autoplayTimeout={2000}
                            autoplayHoverPause={true}
                            dots={false}
                        >
                            {listCards}
                        </OwlCarousel>
                    </Grid.Column>
                    <Grid.Column width="2"></Grid.Column>
                </Grid.Row>
            </Grid>
        </div>  
    );
}

export default LastNew;
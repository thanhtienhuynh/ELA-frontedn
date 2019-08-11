import React from 'react'
import { Divider, Grid, Segment, Image, Header, Dimmer} from 'semantic-ui-react'
import data from './data/data'

const cards = data.PostsData;
const listCards = cards.slice(1, 4)
class NewActivity extends React.Component {
    state = {}

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })

    render(){

        const listCard = listCards.map(card => {
            return (
                <Segment key={card._id} compact textAlign="left" as="a">
                    <Image src={card.image} size="small" floated="left"></Image>
                    <Header>{card.title}</Header>
                    <Header.Content>{card.description}</Header.Content>
                </Segment>
            ) 
        })

        const {active} = this.state;

        const content = (
            <div key={cards[0]._id}>
                <Header size="large" color="olive">{cards[0].title}</Header>
                <Header.Content>{cards[0].description}</Header.Content>
            </div>
        )
        return (
            <div>
                <Divider
                    as='h1'
                    className='header'
                    horizontal
                    style={{ margin: '1.5em 0em', textTransform: 'uppercase', 'color': 'white' }}
                >
                    Activities
                </Divider>
                <Grid columns={2} padded>
                    <Grid.Row stretched>
                        <Grid.Column textAlign="center" verticalAlign="middle">
                            <Segment as="a">
                            <Dimmer.Dimmable
                                fluid
                                as={Image}
                                dimmed={active}
                                dimmer={{ active, content }}
                                onMouseEnter={this.handleShow}
                                onMouseLeave={this.handleHide}
                                src={cards[0].image}
                            />
                            </Segment>
                        </Grid.Column>
                    <Grid.Column>
                        {listCard}
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default NewActivity
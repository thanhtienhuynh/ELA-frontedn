import React from 'react'
import {Divider, Grid} from 'semantic-ui-react'
import CardCourse from './CardCourse'
import data from './data/data'

const cards = data.properties.slice(0, 4);

const NewCourse = () => {
    const gridCard = cards.map(card => {
        return <Grid.Column key={card.id}><CardCourse card={card} /></Grid.Column>
    })
    return (
        <div>
            <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '1.5em 0em', textTransform: 'uppercase', 'color': 'white' }}
            >
                About Courses
            </Divider>
            <Grid columns={4}>
                {gridCard}
            </Grid>
        </div>
    )
} 

export default NewCourse
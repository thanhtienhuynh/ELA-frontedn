import React from 'react'
import {Grid, Popup, Input} from 'semantic-ui-react'
import data from '../data/data'
import CardLec from './CardLec'
const properties = data.properties;
const LecturePage = () => {
    const list = properties.map(property => {
        return <Grid.Column key={property.id}><CardLec  property={property} /></Grid.Column>
    })
    return (
        <div>
            <Grid style={{'paddingTop': '1em'}} padded>
                <Grid.Row>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                        <Popup
                            trigger={<Input fluid icon='search' placeholder='Search...' />}
                            header='Lecture Search'
                            content='You may search by name, nationality, experiences'
                            on='focus'
                            position="bottom right"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
            <Grid columns={3} padded>
                {list}
            </Grid>
        </div>
    );
}
export default LecturePage;

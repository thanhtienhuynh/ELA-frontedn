import React from 'react'
import { Button, Item, Segment } from 'semantic-ui-react'
import Pagination from '../../../CommonComponent/Pagination'

const paragraph = <p>Description</p>
const styleViewButton = { 'marginRight': '4em' };

const SegmentViewNews = () => (
    <Segment>
        <Item.Group relaxed>
            <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />

                <Item.Content verticalAlign='middle'>
                    <Item.Header>Title A</Item.Header>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                        <Button positive style={styleViewButton} floated='right'>View</Button>
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />

                <Item.Content verticalAlign='middle'>
                    <Item.Header>Title B</Item.Header>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                        <Button positive style={styleViewButton} floated='right'>View</Button>
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />

                <Item.Content verticalAlign='middle'>
                    <Item.Header>Title C</Item.Header>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra>
                        <Button positive style={styleViewButton} floated='right'>View</Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
            <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />

                <Item.Content verticalAlign='middle'>
                    <Item.Header>Title C</Item.Header>
                    <Item.Description>{paragraph}</Item.Description>
                    <Item.Extra >
                        <Button positive style={styleViewButton} floated='right'>View</Button>
                    </Item.Extra>
                </Item.Content>
            </Item>

        </Item.Group>
        <div style={{ 'marginTop': '8em', 'textAlign': 'center' }}>
            <Pagination ></Pagination>
        </div>
    </Segment>
)

export default SegmentViewNews
import React from 'react';
import {Card, Label} from 'semantic-ui-react'
const LectureDetail = props => {
    return (
        <Card>
            {props.children}
            <Card.Content>
                <Card.Header>Karren Julietto</Card.Header>
                <Card.Meta>
                    <span className='date'>Country: Philipine</span>
                </Card.Meta>
                <Card.Description>
                    Graduated from oxford university
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Label>Summit 2</Label>
                <Label>Top notch 3</Label>  
            </Card.Content>
        </Card>
    );
}

export default LectureDetail;
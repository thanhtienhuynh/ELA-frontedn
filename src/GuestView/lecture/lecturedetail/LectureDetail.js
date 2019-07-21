import React from './node_modules/react';
import {Card} from './node_modules/semantic-ui-react'
const LectureDetail = props => {
    return (
        <Card centered>
            {props.children}
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Country: {props.country}</span>
                </Card.Meta>
                <Card.Description>
                    {props.des}
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default LectureDetail;
import React from 'react';
import {Card} from 'semantic-ui-react'
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
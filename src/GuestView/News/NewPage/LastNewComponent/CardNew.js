import React from 'react';
import {Card, Image, Button} from 'semantic-ui-react'
const CardNew = ({card}) => {
    const {title, text, image} = card;
    return (
        <div>
            <Card>
                <Image src={image} />
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    {text}
                </Card.Content>
                <Card.Content extra>
                    <Button content="View more" primary size="mini"/>
                </Card.Content>
            </Card>
        </div>
    );
}

export default CardNew
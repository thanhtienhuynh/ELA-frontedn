import React from 'react'
import { Image, Card, Popup, Label } from "semantic-ui-react";
const CardLec = ({property}) => {
    const {name, country, images, DoB, label} = property;
    return (
        <div>
            <Popup 
                trigger={
                    <Card centered>
                        <Image src={images} />
                        <Card.Content>
                            <Card.Header>{name}</Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Label.Group>
                                {label.map(label => {
                                    return <Label key={label} content={label} color="yellow"/>
                                })}
                            </Label.Group>
                        </Card.Content>
                    </Card>
                }
                flowing
                hoverable
            >
                <Popup.Header>{name}</Popup.Header>
                <Popup.Content>
                    <p>Country : {country}</p>
                    <p>Date of Birth: {DoB}</p>
                </Popup.Content>
            </Popup>
        </div>
    )
}

export default CardLec;
import React from 'react';
import { Card, Image, Button, Modal, Header, Rating } from 'semantic-ui-react';

const CardCourse = ({property}) => {
    const {picture, nameCourse, des, imgCourse, title, content, price, date, rating} = property;
    return (
        <div>
            <Modal trigger={
                <Card centered>
                    <Image src={picture} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header textAlign="center">{nameCourse}</Card.Header>
                        <Card.Meta><Rating icon='star' defaultRating={rating} maxRating={4}/></Card.Meta>
                        <Card.Description>
                            <b>{des}</b>
                        </Card.Description>
                    </Card.Content>       
                </Card>
            }>
                <Modal.Header>Course Information</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='massive' src={imgCourse} />
                    <Modal.Description>
                            <Header>{title}</Header>
                            <p>{content}</p>
                            <p>Price:&nbsp;<b>{price}</b></p>
                            <p>Time:&nbsp;<b>{date}</b></p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary size="big" >Attend</Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default CardCourse;
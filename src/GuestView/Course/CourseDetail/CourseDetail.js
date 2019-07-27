import React from 'react';
import { Card, Button, Image, Modal, Header } from 'semantic-ui-react';
const SegmentCourse = props => {
    return (
        <Card centered>
            <Card.Content>
                <Image src={props.img} />
                <Card.Header style={{'marginTop': '1em'}}>{props.title}</Card.Header>
                <Card.Meta>{props.children}</Card.Meta>
                <Card.Description>
                    <b>{props.des}</b>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Modal trigger={<Button basic color='green' style={{'width': '100%'}}>View</Button>}>
                    <Modal.Header>Course Information</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='massive' src={props.imgCourse} />
                        <Modal.Description>
                            <Header>{props.title}</Header>
                            <p>{props.content}</p>
                            <p>Price:&nbsp;<b>{props.price}</b></p>
                            <p>Time:&nbsp;<b>{props.date}</b></p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button primary size="big" >Attend</Button>
                    </Modal.Actions>
                </Modal>
            </Card.Content>
        </Card>
    );
}

export default SegmentCourse;


import React from './node_modules/react';
import { Card, Button, Image, Modal, Header } from './node_modules/semantic-ui-react';
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
                        <Image wrapped size='medium' src={props.imgCourse} />
                        <Modal.Description>
                            <Header>{props.title}</Header>
                            <p><b>{props.title}:&nbsp;</b>{props.content}</p>
                            <p>Price:&nbsp;<b>{props.price}</b></p>
                            <p>Time:&nbsp;<b>{props.date}</b></p>
                            <Button.Group style={{'float': 'right'}}>
                                <Button primary>Attend</Button>
                                <Button.Or />
                                <Button secondary>Detailed Information</Button>
                            </Button.Group>
                        </Modal.Description>
                        
                    </Modal.Content>
                </Modal>
            </Card.Content>
        </Card>
    );
}

export default SegmentCourse;


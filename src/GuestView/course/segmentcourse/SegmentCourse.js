import React from 'react';
import { Card, Button, Image, Modal, Header, Label, Reveal } from 'semantic-ui-react';
const SegmentCourse = props => {
    return (
        <Card>
            <Card.Content>
                <Reveal animated='fade'>
                    <Reveal.Content visible>
                        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/ade.jpg' size='medium' />
                    </Reveal.Content>
                </Reveal>
                {/* <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' /> */}
                <Card.Header style={{'marginTop': '1em'}}>{props.title}</Card.Header>
                <Card.Meta>{props.children}</Card.Meta>
                <Card.Description>
                    This is a <b>basic</b> course
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Modal trigger={<Button basic color='green' style={{'width': '100%'}}>View</Button>}>
                    <Modal.Header>Course Information</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                        <Modal.Description>
                            <Header>Summit1</Header>
                            <p><b>Summit 1&nbsp;</b>develop confident English speakers able to navigate the social and professional situations they will encounter in their lives.</p>
                            <p>Submit offers more ready-to-use teacher resources than any course available today.</p>
                            <p>Price:&nbsp;<b>200$</b></p>
                            <p>
                                Lecture:&nbsp;
                                <Label>Smith</Label>
                                <Label>Julietto Swatt</Label>
                            </p>
                            <p>Time:&nbsp;<b>9/27/2019</b></p>
                            <Button.Group style={{'float': 'right'}}>
                                <Button primary>Attend</Button>
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


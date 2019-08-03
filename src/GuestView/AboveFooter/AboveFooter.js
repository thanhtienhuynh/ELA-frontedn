import React from 'react';
import {Step, Icon, Divider} from 'semantic-ui-react'
const AboveFooter = () => {
    return (
        <div>
            <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
            </Divider>
            <Step.Group style={{'width': '100%', 'height': '10em'}}>
                <Step>
                    <Icon name='handshake' color="green" />
                    <Step.Content>
                        <Step.Title>Sign Up</Step.Title>
                        <Step.Description>Fill out <b>the form</b> to start your success</Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Icon name='add' color="black" />
                    <Step.Content>
                        <Step.Title>Choose proper courses and attend</Step.Title>
                        <Step.Description>We have more than 300 courses to improve all skills</Step.Description>
                    </Step.Content>
                </Step>

                <Step>
                    <Icon name='info' color="red"/>
                    <Step.Content>
                        <Step.Title>Go to class and learn</Step.Title>
                        <Step.Description>Modern devides and enthusiasm teachers</Step.Description>
                    </Step.Content>
                </Step>
            </Step.Group>
        </div>
        
    )
}

export default AboveFooter;
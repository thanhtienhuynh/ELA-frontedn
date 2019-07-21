import React from './node_modules/react';
import {Step, Icon} from './node_modules/semantic-ui-react'
const AboveFooter = () => {
    return (
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
    )
}

export default AboveFooter;
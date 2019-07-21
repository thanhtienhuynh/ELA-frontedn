import React from './node_modules/react'
import { Button, Form, Segment } from './node_modules/semantic-ui-react'

const FormLogin = () => (
    <Segment placeholder>
        <Form>
            <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
            <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />
            <Button content='Login' primary />
        </Form>
    </Segment>
)

export default FormLogin
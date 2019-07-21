import React from './node_modules/react';
import {Button, Form, Message, Segment} from './node_modules/semantic-ui-react'
const SignUp = () => {
    return (
        <Segment placeholder>
            <Message
                attached
                header='Sign up'
            />
            <Form className='attached fluid segment'>
                <Form.Input fluid label='First Name' placeholder='First Name' type='text' />
                <Form.Input fluid label='Last Name' placeholder='Last Name' type='text' />
                <Form.Input fluid label='Username' placeholder='Username' type='text' />
                <Form.Input fluid label='Password' type='password' />
                <Form.Checkbox inline label='I agree to the terms and conditions' />
                <Button primary>Sign up</Button>
                
            </Form>
        </Segment>
    );
};

export default SignUp;
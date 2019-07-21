import React from './node_modules/react'
import { Button, Modal } from './node_modules/semantic-ui-react'
import SignUp from '../FormSIgnup/FormSignup'

const ButtonSignup= () => (
    <Modal trigger={<Button>Sign up</Button>} style={{ 'width': '40em'}}>
        <Modal.Content >
            <SignUp />
        </Modal.Content>
    </Modal>
)

export default ButtonSignup
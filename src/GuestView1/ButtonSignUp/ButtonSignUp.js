import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SignUp from '../FormSignUp/FormSignUp'

const ButtonSignup= () => (
    <Modal trigger={<Button>Sign up</Button>} style={{ 'width': '40em'}}>
        <Modal.Content >
            <SignUp />
        </Modal.Content>
    </Modal>
)

export default ButtonSignup
import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import FormLogin from '../formlogin/FormLogin'

const ButtonLogin = () => (
    <Modal trigger={<Button>Login</Button>} style={{ 'width': '40em' }}>
        <Modal.Header>Login</Modal.Header>
        <Modal.Content >
            <FormLogin />
        </Modal.Content>
    </Modal>
)

export default ButtonLogin
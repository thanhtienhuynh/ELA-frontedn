import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import FormLogin from '../../FormLogin/FormLogin'

const ButtonLogin = () => (
    <Modal trigger={<Button primary>Login</Button>} style={{ 'width': '40em'}}>
        <Modal.Content >
            <FormLogin />
        </Modal.Content>
    </Modal>
)

export default ButtonLogin
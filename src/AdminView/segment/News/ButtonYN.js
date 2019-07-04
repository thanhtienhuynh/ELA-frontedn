import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const styleButton = {'marginTop':'2em'};

const ButtonYN = () => (
    <Modal 
        trigger={<Button positive style={styleButton}>Create</Button>}
        header='Reminder!'
        content='Are you sure that you want to create this article?'
        actions={['Decline', { key: 'done', content: 'Done', positive: true }]}
    />
)

export default ButtonYN;
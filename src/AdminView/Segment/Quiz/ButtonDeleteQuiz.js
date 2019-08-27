import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ButtonDeleteQuiz = () => (
  <Modal trigger={<Button negative style={{ 'fontSize': '10px', 'width': '6em', 'marginLeft':'1em' }}>Delete</Button>} basic size='small'>
    <Header icon='delete' content='Delete?' />
    <Modal.Content>
      <p>
      Are You Sure To Delete This Account?
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ButtonDeleteQuiz
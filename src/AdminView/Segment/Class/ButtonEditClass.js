import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SegmentEditAccount from './SegmentEditClass'

const ButtonEdit = () => (
    <Modal
        trigger={<Button positive style={{ 'fontSize': '10px', 'width': '6em' }} >Edit</Button>}
    >
        <Modal.Content >
            <Modal.Description>
                <SegmentEditAccount></SegmentEditAccount>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default ButtonEdit
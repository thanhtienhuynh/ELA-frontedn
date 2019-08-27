import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SegmentEditQuestion from './SegmentEditQuestion'

const ButtonView = () => (
    <Modal
        trigger={<Button positive style={{ 'fontSize': '10px', 'width': '6em', 'marginLeft': '1em' }} >View</Button>}
    >
        <Modal.Content >
            <Modal.Description>
                <SegmentEditQuestion></SegmentEditQuestion>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default ButtonView;
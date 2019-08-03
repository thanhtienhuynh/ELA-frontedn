import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SegmentEditExam from './SegmentEditExam'

const ButtonEdit = () => (
    <Modal
        trigger={<Button positive style={{ 'fontSize': '10px', 'width': '6em' }} >Edit</Button>}
    >
        <Modal.Content >
            <Modal.Description>
                <SegmentEditExam></SegmentEditExam>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default ButtonEdit
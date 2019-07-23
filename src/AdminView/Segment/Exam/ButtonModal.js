import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SegmentCreateExam from './SegmentCreateExam';


const ModalButton = () => (
    <Modal trigger={<Button floated='right' positive>Edit</Button>}>
        <Modal.Header>Edit Exam</Modal.Header>
        <Modal.Content >
            <Modal.Description>
                <SegmentCreateExam></SegmentCreateExam>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)
export default ModalButton
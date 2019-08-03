import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SegmentEditCourse from './SegmentEditCourse'

const ButtonEdit = () => (
    <Modal
        trigger={<Button positive style={{ 'fontSize': '10px' }} >Edit</Button>}
    >
        <Modal.Content >
            <Modal.Description>
                <SegmentEditCourse></SegmentEditCourse>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default ButtonEdit
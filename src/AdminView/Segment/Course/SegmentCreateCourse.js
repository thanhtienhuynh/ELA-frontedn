import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import UploadPhoto from '../../../CommonComponent/UploadPhoto'

class SegmentCreateCourse extends Component {
    state = { startedDate: '', finishedDate: '' }

    handleChange = (e, { value }) => this.setState({ value })

    render() {

        return (
            <Segment>
                <Form style={{ 'width': '735px', 'height':'500px' }}>
                    <UploadPhoto></UploadPhoto>
                    <Form.Input required fluid label='Name' placeholder='Name' />
                    <Form.Input required fluid label='Description' placeholder='Descrioption' />
                    <Form.Input required fluid label='Total Slot' placeholder='Total Slot' />
                    <Form.Input required fluid label='Price' placeholder='Price' />
                    <Form.Button positive>Create</Form.Button>
                </Form>
            </Segment>
        )
    }
}

export default SegmentCreateCourse;
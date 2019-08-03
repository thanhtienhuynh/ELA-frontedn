import React, { Component } from 'react'
import { Form, Segment, Button } from 'semantic-ui-react'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import UploadPhoto from '../../../CommonComponent/UploadPhoto'

class SegmentCreateAccount extends Component {
    state = { startedDate: '', finishedDate: '' }

    handleChange = (e, { value }) => this.setState({ value })

    render() {

        return (
            <Segment>
                <Form style={{ 'width': '735px', 'height': '500px' }}>
                    <UploadPhoto></UploadPhoto>
                    <Form.Input required fluid label='Name' placeholder='Name' />
                    <Form.Input required fluid label='Description' placeholder='Descrioption' />
                    <Form.Input required fluid label='Total Slot' placeholder='Total Slot' />
                    <Form.Input required fluid label='Price' placeholder='Price' />
                    <Form.Group>
                        <Form.Field positive control={Button}>Save</Form.Field>
                        <Button negative>Cancel</Button></Form.Group>
                </Form>
            </Segment>
        )
    }

}

export default SegmentCreateAccount;

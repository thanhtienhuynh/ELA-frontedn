import React, { Component } from 'react'
import { Form, Segment, Button } from 'semantic-ui-react'
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const optionSlot = [
    { key: 's1', text: 'Slot 1', value: 'slot1' },
    { key: 's2', text: 'Slot 2', value: 'slot2' },
    { key: 's3', text: 'Slot 3', value: 'slot3' },
    { key: 's4', text: 'Slot 4', value: 'slot4' },
    { key: 's5', text: 'Slot 5', value: 'slot5' },
    { key: 's6', text: 'Slot 6', value: 'slot6' },
]

const optionCourse = [
    { key: 'lv1', text: 'Level 1', value: 'level1' },
    { key: 'lv2', text: 'Level 2', value: 'level2' },
    { key: 'lv3', text: 'Level 3', value: 'level3' },
    { key: 'lv4', text: 'Level 4', value: 'level4' },
    { key: 'lv5', text: 'Level 5', value: 'level5' },
    { key: 'lv6', text: 'Level 6', value: 'level6' },
]

class SegmentCreateClass extends Component {
    state = { startedDate: '', finishedDate: '' }

    handleChange = (e, { value }) => this.setState({ value })

    render() {

        return (
            <Segment>
                <Form>
                    <Form.Input required style={{ 'marginBottom': '2em', 'width': '52em' }} fluid label='Name' placeholder='Name' />
                    <label style={{ 'fontWeight': '800' }}>Started Date</label> <br></br>
                    <Calendar placeholder='Started Date' style={{ 'marginTop': '0.5em', 'width': '50em', 'marginBottom': '2em' }} value={this.state.startedDate} onChange={(e) => this.setState({ startedDate: e.value })} showButtonBar={true} showIcon={true} ></Calendar> <br></br>
                    <label style={{ 'fontWeight': '800' }}>Finished Date</label> <br></br>
                    <Calendar placeholder='Finished Date' style={{ 'marginTop': '0.5em', 'width': '50em', 'marginBottom': '2em' }} value={this.state.finishedDate} onChange={(e) => this.setState({ finishedDate: e.value })} showButtonBar={true} showIcon={true} ></Calendar> <br></br>
                    <Form.Select required style={{ 'marginBottom': '2em', 'width': '52em' }} fluid label='Slot' options={optionSlot} placeholder='Slot' />
                    <Form.Select required style={{ 'marginBottom': '2em', 'width': '52em' }} fluid label='Course' options={optionCourse} placeholder='Course' />
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Min Student' placeholder='Max Student' />
                        <Form.Input fluid label='Max Student' placeholder='Max Student' />
                        <Form.Input fluid label='Total Slot' placeholder='Total Slot' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field positive control={Button}>Save</Form.Field>
                        <Button negative>Cancel</Button></Form.Group>
                </Form>
            </Segment>
        )
    }
}

export default SegmentCreateClass;
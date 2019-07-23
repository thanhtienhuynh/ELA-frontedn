import React, { Component } from 'react'
import { Button, Form, Input, Segment } from 'semantic-ui-react'

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

class SegmentUpdateClass extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (

            <Segment>
                <Input floated='right' fluid icon='search' placeholder='Search account...'></Input>
                <Form>
                    <Form.Input fluid label='Name' placeholder='Name' />
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Started Date' placeholder='Started Date' />
                        <Form.Input fluid label='Finished Date' placeholder='Finished Date' />
                    </Form.Group>
                    <Form.Select fluid label='Slot' options={optionSlot} placeholder='Slot' />
                    <Form.Select fluid label='Course' options={optionCourse} placeholder='Course' />
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Min Student' placeholder='Max Student' />
                        <Form.Input fluid label='Max Student' placeholder='Max Student' />
                        <Form.Input fluid label='Total Slot' placeholder='Total Slot' />
                    </Form.Group>
                    <Form.Group style={{ 'marginTop': '2em' }}>
                        <Form.Field positive control={Button}>Submit</Form.Field>
                        <Form.Field negative control={Button}>Delete</Form.Field>
                    </Form.Group>

                </Form>
            </Segment>
        )
    }
}

export default SegmentUpdateClass;

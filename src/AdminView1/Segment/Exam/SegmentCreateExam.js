import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

const optionTest = [
    { key: 'lv1', text: 'Level 1', value: 'level1' },
    { key: 'lv2', text: 'Level 2', value: 'level2' },
    { key: 'lv3', text: 'Level 3', value: 'level3' },
    { key: 'lv4', text: 'Level 4', value: 'level4' },
    { key: 'lv5', text: 'Level 5', value: 'level5' },
    { key: 'lv6', text: 'Level 6', value: 'level6' },
]

class SegmentCreateExam extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        
        return (
            <Segment>
                <Form>
                    <Form.Input fluid label='Name' placeholder='Name' />
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Started Date' placeholder='Started Date' />
                        <Form.Input fluid label='Finished Date' placeholder='Finished Date' />
                    </Form.Group>
                    <Form.Select fluid label='Test' options={optionTest} placeholder='Test' />
                    <label style={{ 'fontWeight': '800' }}>Class</label>
                    <Form.Group widths='equal' style={{'marginTop':'1em'}}>
                        <Form.Field label='SE1319' control='input' type='checkbox' />
                        <Form.Field label='SE1319' control='input' type='checkbox' />
                        <Form.Field label='SE1319' control='input' type='checkbox' />
                        <Form.Field label='SE1319' control='input' type='checkbox' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field label='SE1319' control='input' type='checkbox' />
                        <Form.Field label='SE1319' control='input' type='checkbox' />
                        <Form.Field label='SE1319' control='input' type='checkbox' />
                        <Form.Field label='SE1319' control='input' type='checkbox' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field label='SE1319' control='input' type='checkbox' />
                        <Form.Field label='SE1319' control='input' type='checkbox' />
                        <Form.Field label='SE1319' control='input' type='checkbox' />
                        <Form.Field label='SE1319' control='input' type='checkbox' />
                    </Form.Group>

                    <Form.Button positive>Create</Form.Button>
                </Form>
            </Segment>
        )
    }
}

export default SegmentCreateExam;
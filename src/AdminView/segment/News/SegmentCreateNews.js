import React, { Component } from 'react'
import { Segment, Form, Input } from 'semantic-ui-react'
import TextEditor from '../texteditor/TextEditor'

const styleForm = { 'height': '3.5em', 'marginBottom': '2em'};
const styleSegment = {'paddingTop':'2em'};

export default class SegmentCreateNews extends Component {
    render() {
        return (
            <Segment style={styleSegment}>
                <Form>
                    <Form.Field control={Input} label='Title' placeholder='Title' style={styleForm} />
                    <Form.Field control={Input} label='Author' placeholder='Author' style={styleForm} />
                </Form>
                <label style={{ 'fontWeight': '700' }}>Content</label>
                <TextEditor></TextEditor>
            </Segment>
        )
    }
}
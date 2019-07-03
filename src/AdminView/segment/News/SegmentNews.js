import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import TextEditor from '../texteditor/TextEditor'

export default class SegmentNews extends Component {
    render() {
        return (
            <Segment>
                <TextEditor></TextEditor>
            </Segment>
        )
    }
}
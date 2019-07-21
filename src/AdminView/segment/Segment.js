import React, { Component } from './node_modules/react'
import { Segment } from './node_modules/semantic-ui-react'

export default class SegmentArea extends Component {
    render() {

        return (
            <Segment>
                This is an stretched grid column. This segment will always match the tab height
          </Segment>
        )
    }
}
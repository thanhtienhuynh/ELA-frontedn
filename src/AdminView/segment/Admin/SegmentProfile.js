import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import ProfileForm from '../../profileform/ProfileForm'
import Avatar from '../../avatar/Avatar'

export default class SegmentProfile extends Component {
    render() {
        return (
            <Segment>
                <Avatar />
                <ProfileForm />
          </Segment>
          
        )
    }
}
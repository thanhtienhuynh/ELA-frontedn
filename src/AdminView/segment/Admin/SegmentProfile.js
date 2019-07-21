import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import ProfileForm from '../../ProfileForm/ProfileForm'
import Avatar from '../../Avatar/Avatar'
import ButtonUpdateImage from '../../../CommonComponent/ButtonUpdateImage';

export default class SegmentProfile extends Component {
    render() {
        return (
            <Segment>
                <Avatar></Avatar>
                <ButtonUpdateImage></ButtonUpdateImage>
                <ProfileForm />
            </Segment>
        )
    }
}

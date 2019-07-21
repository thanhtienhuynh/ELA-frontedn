import React, { Component } from 'react'
import { Segment, Header, Image, Modal, Button } from 'semantic-ui-react'
import ProfileForm from '../../profileform/ProfileForm'
import Avatar from '../../avatar/Avatar'
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

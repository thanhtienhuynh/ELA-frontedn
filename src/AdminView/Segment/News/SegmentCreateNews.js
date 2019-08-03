import React, { Component } from 'react'
import { Segment, Form, Input, Message, Button } from 'semantic-ui-react'
import ButtonUpdateImage from '../../../CommonComponent/ButtonUpdateImage';
import Avatar from '../../Avatar/Avatar'
import { Editor } from 'primereact/editor'

const styleForm = { 'height': '4em', 'marginBottom': '1em' };
const styleSegment = { 'paddingTop': '2em' };

export default class SegmentCreateNews extends Component {
    state = {
        text: '',
        title: '',
        topic: '',
        submittedText: '',
        submittedTitle: '',
        submittedTopic: '',
        displayeMesssageText: true,
        displayeMesssageTitle: true,
        displayeMesssageTopic: true,

    };

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (e) => {
        const { text, title, topic } = this.state

        this.setState({ submittedText: text, submittedTitle: title, submittedTopic: topic })

        if (text === '') {
            this.setState({ displayeMesssageText: false })
        } else {
            this.setState({ displayeMesssageText: true })
        }
        if (title === '') {
            this.setState({ displayeMesssageTitle: false })
        } else {
            this.setState({ displayeMesssageTitle: true })
        }

        if (topic === '') {
            this.setState({ displayeMesssageTopic: true })
        } else {
            this.setState({ displayeMesssageTopic: false })
        }
    }


    render() {

        const { text, title, topic } = this.state

        return (
            <Segment style={styleSegment}>
                <Avatar></Avatar>
                <ButtonUpdateImage></ButtonUpdateImage>
                <Form style={{ 'marginTop': '1em' }}>
                    <Form.Field value={title} name="title" onChange={this.handleChange} required control={Input} label='Title' placeholder='Title' style={styleForm} />
                    <Message negative hidden={this.state.displayeMesssageTitle}>Please enter your password!!!</Message>
                    <Form.Field value={topic} name="topic" onChange={this.handleChange} required control={Input} label='Topic' placeholder='Topic' style={styleForm} />
                    <Message negative hidden={this.state.displayeMesssageTopic}>Please enter your password!!!</Message>
                    <label style={{ 'fontWeight': '700', 'marginBottom':'0.5em' }}>Content</label>
                    <Editor value={text} name="text" onChange={this.handleChange} style={{ 'height': '150px', 'marginBottom':'1em' }} value={this.state.text} onTextChange={(e) => this.setState({ text: e.htmlValue })} />
                    <Form.Field positive control={Button}>Create</Form.Field>
                </Form>
            </Segment>
        )
    }
}
import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Image, Segment } from 'semantic-ui-react'
const styleForm = { 'width': '40em', 'height': '3.5em' };

class SegmentUpdateAccount extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (

            <Segment>
                <Input floated='right' fluid icon='search' placeholder='Search account...'></Input>
                <Form>
                    <Image style={{ marginBottom: '3em', marginTop: '1em' }} src='https://react.semantic-ui.com/images/wireframe/square-image.png' circular />
                    <Form.Group widths='equal'>
                        <Form.Field fluid control={Input} label='First name' placeholder='First name' style={styleForm} />
                        <Form.Field fluid control={Input} label='Last name' placeholder='Last name' style={styleForm} />
                    </Form.Group>


                    <Form.Group inline>
                        <label>Gender</label>
                        <Form.Field
                            control={Radio}
                            label='Male'
                            value='male'
                            checked={value === 'male'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Female'
                            value='female'
                            checked={value === 'female'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Other'
                            value='other'
                            checked={value === 'other'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} label='Phone' placeholder='Phone' style={styleForm} />
                        <Form.Field control={Input} label='Address' placeholder='Address' style={styleForm} />
                    </Form.Group>


                    <Form.Group widths='equal'>
                        <div></div>
                        <Form.Field control={Input} label='Password' placeholder='Password' style={styleForm} />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Role</label>
                        <Form.Field
                            control={Radio}
                            label='Student'
                            value='student'
                            checked={value === 'student'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Teacher'
                            value='teacher'
                            checked={value === 'teacher'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Admin'
                            value='admin'
                            checked={value === 'admin'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Status</label>
                        <Form.Field
                            control={Radio}
                            label='Active'
                            value='active'
                            checked={value === 'active'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Block'
                            value='block'
                            checked={value === 'block'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
                    <Form.Group style={{'marginTop':'2em'}}>
                        <Form.Field positive control={Button}>Submit</Form.Field>
                        <Form.Field negative control={Button}>Delete</Form.Field>
                    </Form.Group>

                </Form>
            </Segment>
        )
    }
}

export default SegmentUpdateAccount;

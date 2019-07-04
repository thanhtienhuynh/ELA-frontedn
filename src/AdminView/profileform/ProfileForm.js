import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, TextArea } from 'semantic-ui-react'

const styleForm = { 'width': '40em', 'height': '3.5em' };

class ProfileForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>

        <Form.Field control={Input} label='First name' placeholder='First name' style={styleForm} />
        <Form.Field control={Input} label='Last name' placeholder='Last name' style={styleForm} />

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
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
        <Form.Field positive control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default ProfileForm;

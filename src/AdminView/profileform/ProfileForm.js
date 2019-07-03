import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, TextArea } from 'semantic-ui-react'

class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>

        <Form.Field control={Input} label='First name' placeholder='First name' />
        <Form.Field control={Input} label='Last name' placeholder='Last name' />

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
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default FormExampleFieldControl

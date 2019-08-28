import React, { Component } from 'react'
import { Header,Form, Button, Segment, Message, Grid, Radio } from 'semantic-ui-react'
const children = "Agree for Term and Condition"
class FormSignUp extends Component {
    state = { 
        phone: '',
        value: '', 
        firstName: '', 
        lastName: '',
        name: '', 
        password: '', 
        repassword: '', 
        submittedName: '', 
        submittedPassword: '',
        submittedRepassword: '',
        submittedFirstName: '',
        submittedLastName: '',
        submittedPhone: '',
        submittedValue: '', 
        displayMessageRadio: false,
        displayMessageRepassword: true ,
        displayMessageName: true, 
        displayMessagePassword: true, 
        errorFirstName: false, 
        errorLastName: false,
        displayMessagePhone: false,
    };

    handleChange = (e, { name, value }) => this.setState({ [name]: value })
    handleChangeSelectGender = (e, { value }) => this.setState({ value })

    handleSubmit = (event) => {
        const { value, name, password, repassword, firstName, lastName, phone, submittedFirstName, submittedName, submittedLastName, submittedPassword,submittedPhone,submittedRepassword,submittedValue } = this.state

        this.setState({ submittedName: name, submittedPassword: password, submittedFirstName: firstName, submittedLastName: lastName, submittedRepassword: repassword, submittedPhone: phone, submittedValue: value })
        if(name === ''){
            this.setState({displayMessageName: false})
        } else {
            this.setState({displayMessageName: true})
        }
        if(password === ''){
            this.setState({displayMessagePassword: false})
        } else {
            this.setState({displayMessagePassword: true})
        }
        if(repassword !== password){
            this.setState({displayMessageRepassword: false})
        } else {
            this.setState({displayMessageRepassword: true})
        }
        if(firstName === ''){
            this.setState({errorFirstName: true})
        } else {
            this.setState({errorFirstName: false})
        }
        if(lastName === ''){
            this.setState({errorLastName: true})
        } else {
            this.setState({errorLastName: false})            
        }
        if(value === ''){
            this.setState({displayMessageRadio: true})
        } else {
            this.setState({displayMessageRadio: false})
        }
        if(phone === ''){
            this.setState({displayMessagePhone: true})
        } else {
            this.setState({displayMessagePhone: false})
        }
        if(
            submittedFirstName === '' || 
            submittedLastName === '' ||
            submittedName === '' ||
            submittedPassword === '' ||
            submittedPhone === '' ||
            submittedRepassword === '' ||
            submittedValue === ''
        ){
            event.preventDefault();
        }
    }

    render() {
        const { firstName, lastName, phone ,name, password, repassword, value } = this.state

    return (
        <div>
            <Header as="h2" textAlign="center" color="blue">
                Register
            </Header>
            <Segment>
                <Form size="large" onSubmit={this.handleSubmit}>
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="Username"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <Message negative hidden={this.state.displayMessageName}>Please enter your username!!!</Message>
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <Message negative hidden={this.state.displayMessagePassword}>Please enter your password!!!</Message>
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Re-type Password"
                        type="password"
                        name="repassword"
                        value={repassword}
                        onChange={this.handleChange}
                    />
                    <Message negative hidden={this.state.displayMessageRepassword}>Re-type password is incorect!!!</Message>
                    <Form.Group unstackable widths={2}>
                        <Form.Input
                            fluid
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleChange}
                            error={this.state.errorFirstName}
                        />
                        <Form.Input
                            fluid
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChange}
                            error={this.state.errorLastName}
                        />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Gender</label>
                        <Form.Field
                            control={Radio}
                            label='Male'
                            value='male'
                            checked={value === 'male'}
                            onChange={this.handleChangeSelectGender}
                        />
                        <Form.Field
                            control={Radio}
                            label='Female'
                            value='female'
                            checked={value === 'female'}
                            onChange={this.handleChangeSelectGender}
                        />
                        <Form.Field
                            control={Radio}
                            label='Other'
                            value='other'
                            checked={value === 'other'}
                            onChange={this.handleChangeSelectGender}
                        />
                    </Form.Group>
                    <Message negative hidden={!this.state.displayMessageRadio}>
                        Please tick your gender!
                    </Message>
                    <Form.Input
                        fluid
                        icon="phone"
                        iconPosition="left"
                        placeholder="Phone"
                        type="number"
                        name="phone"
                        value={phone}
                        onChange={this.handleChange}
                    />
                    <Message negative hidden={!this.state.displayMessagePhone}>
                        Please input your phone number!
                    </Message>
                    <Form.Checkbox 
                        label={children}
                    />
                    <Button color="blue" fluid size="large">Sign up</Button>
                </Form>
            </Segment>
            <Grid>
                <Grid.Column textAlign="center">
                    <Message size="big">
                        Have an Account already? <a href="#1">Log in</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
  }
}

export default FormSignUp
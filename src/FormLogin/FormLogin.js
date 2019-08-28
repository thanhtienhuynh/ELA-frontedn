import React, { Component } from 'react'
import { Header,Form, Button, Segment, Message, Grid } from 'semantic-ui-react'

class FormLogin extends Component {
  state = { name: '', password: '', submittedName: '', submittedPassword: '', displayMessageName: true, displayMessagePassword: true };

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, password } = this.state

    this.setState({ submittedName: name, submittedPassword: password })
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
  }

  render() {
    const { name, password} = this.state

    return (
        <div>
            <Header as="h2" textAlign="center" color="blue">
                Login
            </Header>
            <Segment>
                <Form size="large" onSubmit={this.handleSubmit}>
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="Account"
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
                    <p style={{'textAlign': 'right'}}><a href="#1">Forget Password?</a></p>
                    <Button color="blue" fluid size="large">
                        Login
                    </Button>
                </Form>
            </Segment>
            <Grid>
                <Grid.Column textAlign="center">
                    <Message size="big">
                        New to us? <a href="#1">Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
  }
}

export default FormLogin
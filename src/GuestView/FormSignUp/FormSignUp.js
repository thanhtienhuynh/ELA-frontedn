import React, { Component } from 'react'
import { Header,Form, Button, Segment, Message, Grid } from 'semantic-ui-react'
const children = "Agree for Term and Condition"
class FormSignUp extends Component {
  state = { name: '', password: '', repassword: '', submittedName: '', submittedPassword: '', displayMessageRepassword: true ,displayMessageName: true, displayMessagePassword: true };

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, password, repassword } = this.state

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
    if(repassword !== password){
        this.setState({displayMessageRepassword: false})
    } else {
        this.setState({displayMessageRepassword: true})
    }
  }

  render() {
    const { name, password, repassword } = this.state

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
                    <Form.Checkbox label={children} />
                    <Button color="blue" fluid size="large">
                        Sign up
                    </Button>
                </Form>
            </Segment>
            <Grid>
                <Grid.Column textAlign="center">
                    <Message size="big">
                        Have an Account already? <a href="#">Log in</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
  }
}

export default FormSignUp
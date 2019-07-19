import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ButtonLogin from '../buttonlogin/ButtonLogin';
import ButtonSignUp from '../buttonsignup/ButtonSignUp'
const styleHeader = { 'backgroundColor': 'rgb(20, 20, 20)', 'height': '5em', 'paddingRight': '1em', 'paddingTop': '0.4em'};
const styleLogo={'marginTop': '0.3em', 'fontWeight':'900', 'fontSize': '1.5em', 'fontFamily': 'cursive', 'marginLeft': '1em'}

export default class MenuHeader extends Component {
    state={activeItem: 'Homepage'};
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const {activeItem} = this.state;
        return (
            <div style={styleHeader}>
                <Menu secondary inverted>
                    <Menu.Item
                        style={styleLogo} 
                        as={Link} to="/homepage"
                        icon='audible'
                        name='Udemy'
                        active={activeItem === 'Udemy'}
                        onClick={this.handleItemClick}
                    />
                    
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} to="/homepage"
                            name='Homepage'
                            active={activeItem === 'Homepage'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item as={Link} to="/homepage/courses"
                            name='Courses'
                            active={activeItem === 'courses'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item as={Link} to="/homepage/lectures"
                            name='Lectures'
                            active={activeItem === 'Lectures'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item as={Link} to="/homepage/aboutus"
                            name='About us'
                            active={activeItem === 'About us'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item>
                            <ButtonLogin />
                        </Menu.Item>
                        <Menu.Item>
                            <ButtonSignUp />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
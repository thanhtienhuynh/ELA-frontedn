import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ButtonLogin from '../buttonlogin/ButtonLogin';


const styleHeader = { 'backgroundColor': 'rgb(20, 20, 20)', 'height': '5em', 'paddingRight': '1em', 'paddingTop': '0.2em'};
const styleLogo={'color': 'white', 'marginTop': '0.5em', 'fontWeight':'900', 'fontSize': '1.5em', 'fontFamily': 'cursive', 'marginLeft': '1em'}

export default class MenuHeader extends Component {
    state={};
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const {activeItem} = this.state;
        return (
            <div style={styleHeader}>
                <Menu secondary inverted>
                    <Menu.Item
                        style={styleLogo} 
                        as={Link} to="/"
                        icon='audible'
                        name='Udemy'
                        active={activeItem === 'udemy'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <ButtonLogin />
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
import React, { Component } from './node_modules/react'
import { Menu, Dropdown, Input } from './node_modules/semantic-ui-react'
import { Link } from './node_modules/react-router-dom';

const styleHeader={'backgroundColor':'rgb(20, 20, 20)', 'height':'5em', 'paddingRight':'2em'};
const styleItem={'marginLeft':'5em','marginTop': '0em', 'fontWeight':'900', 'color' : 'white'};
const styleLogo={'color': 'white', 'marginTop': '0.5em', 'fontWeight':'900', 'fontSize': '1.5em', 'fontFamily': 'cursive', 'marginLeft': '1em'}

export default class MenuHeader extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const {activeItem} = this.state;
        return (
            <div style={styleHeader}>
                <Menu inverted secondary>
                    <Menu.Item
                        style={styleLogo} 
                        as={Link} to="/"
                        icon='audible'
                        name='Udemy'
                        active={activeItem === 'udemy'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' className='search' placeholder='Search course...' />
                        </Menu.Item>
                        <Dropdown style={styleItem} simple item icon='triangle down' >
                            <Dropdown.Menu>
                                <Dropdown.Item icon='home' text='Home' as={Link} to="/?"/>
                                <Dropdown.Item icon='setting' text='Setting' />
                                <Dropdown.Divider />
                                <Dropdown.Item icon='log out' text='Log out' />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
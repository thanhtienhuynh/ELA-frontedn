import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import './Header.css';

export default class MenuHeader extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div className='border'>
                <Menu secondary>
                    <p style={{fontSize:'2em', fontFamily: 'Courier New', marginTop: '20px'}}>Easy Learning System</p>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
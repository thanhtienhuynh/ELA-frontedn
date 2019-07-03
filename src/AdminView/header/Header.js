import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


const styleHeader={'backgroundColor':'rgb(101, 146, 197)', 'height':'5em', 'paddingRight':'10em'};
const styleButton={'marginLeft':'5em','marginTop': '1em', 'fontWeight':'900'};

export default class MenuHeader extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div style={styleHeader}>
                <Menu secondary>
                    <p >Logo</p>
                    <Menu.Menu position='right'>
                        <Menu.Item style={styleButton}
                            name='home'
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item style={styleButton}
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
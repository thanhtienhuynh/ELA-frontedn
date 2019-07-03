import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import ButtonLogin from '../buttonlogin/ButtonLogin';


const styleHeader = { 'backgroundColor': 'rgb(101, 146, 197)', 'height': '5em', 'paddingRight': '10em', 'paddingTop': '1em' };

export default class MenuHeader extends Component {

    render() {
        return (
            <div style={styleHeader}>
                <Menu secondary>
                    <Menu.Menu position='right'>
                        <ButtonLogin />
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
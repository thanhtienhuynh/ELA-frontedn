import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const styleItem = { 'lineHeight': '3em', 'fontSize': '18px' }
const styleItemAdmin = { 'lineHeight': '3em', 'color': 'rgb(35, 231, 17)' }
const styleNavigationBar = { 'color': 'white', 'backgroundColor': 'rgb(55, 59, 55)', 'textAlign': 'center' };
const styleMenuBar = { 'width': '25em', 'height': '58em', 'borderRadius': 0 };

export default class MenuBar extends React.Component {
    state = { activeItem: 'dashboard' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu inverted vertical style={styleMenuBar} >
                <Menu.Item style={styleItemAdmin} as={Link} to="/admin/profile"
                    name='admin'
                    active={activeItem === 'admin'}
                    onClick={this.handleItemClick}
                />

                <Menu.Item style={styleNavigationBar}>MAIN NAVIGATION</Menu.Item>
                <Menu.Item style={styleItem} icon='dashboard' as={Link} to="/"
                    name='dashboard'
                    active={activeItem === 'dashboard'}
                    onClick={this.handleItemClick}
                />

                <Dropdown style={styleItem} item text='Students'>
                    <Dropdown.Menu >
                        <Dropdown.Item icon='edit' text='View' />
                        <Dropdown.Item icon='globe' text='Update' />
                        <Dropdown.Item icon='settings' text='Create' />
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={styleItem} item text='Teachers' >
                    <Dropdown.Menu>
                        <Dropdown.Item icon='edit' text='View' />
                        <Dropdown.Item icon='globe' text='Update' />
                        <Dropdown.Item icon='settings' text='Create' />
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown style={styleItem} item text='Classes' >
                    <Dropdown.Menu>
                        <Dropdown.Item icon='edit' text='View' />
                        <Dropdown.Item icon='globe' text='Update' />
                        <Dropdown.Item icon='settings' text='Create' />
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown style={styleItem} item text='Attendances'>
                    <Dropdown.Menu>
                        <Dropdown.Item icon='edit' text='View' />
                        <Dropdown.Item icon='globe' text='Update' />
                        <Dropdown.Item icon='settings' text='Create' />
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown style={styleItem} item text='Courses' >
                    <Dropdown.Menu>
                        <Dropdown.Item icon='edit' text='View' />
                        <Dropdown.Item icon='globe' text='Update' />
                        <Dropdown.Item icon='settings' text='Create' />
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown style={styleItem} item text='Exams' >
                    <Dropdown.Menu>
                        <Dropdown.Item icon='edit' text='View' />
                        <Dropdown.Item icon='globe' text='Update' />
                        <Dropdown.Item icon='settings' text='Create' />
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={styleItem} item text='News'  >
                    <Dropdown.Menu>
                        <Dropdown.Item icon='edit' text='View' as={Link} to="/admin/news/view"/>
                        <Dropdown.Item icon='globe' text='Update' as={Link} to="/admin/news/update"/>
                        <Dropdown.Item icon='settings' text='Create' as={Link} to="/admin/news/create"/>
                    </Dropdown.Menu>
                </Dropdown>


            </Menu>
        )
    }
}
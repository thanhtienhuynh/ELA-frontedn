import React from 'react';
import { Menu, Dropdown, Accordion } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const styleItem = { 'lineHeight': '3.2em', 'fontSize': '17px' }
const styleMenuBar = { 'width': '25em', 'height': '62em', 'borderRadius': 0 };

export default class MenuBar extends React.Component {
    state = { activeItem: 'admin' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            
            <Menu inverted vertical style={styleMenuBar} >
                
                <Menu.Item style={styleItem} as={Link} to="/admin"
                    name='admin'
                    active={activeItem === 'admin'}
                    onClick={this.handleItemClick}
                />
                
                <Menu.Item style={styleItem}  icon='dashboard' as={Link} to="/admin/dashboard"
                    name='dashboard'
                    active={activeItem === 'dashboard'}
                    onClick={this.handleItemClick}
                />

                <Dropdown style={styleItem} item text='Students' >
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
                        <Dropdown.Item icon='edit' text='View' as={Link} to="/admin/class/view"/>
                        <Dropdown.Item icon='globe' text='Update' as={Link} to="/admin/class/update"/>
                        <Dropdown.Item icon='settings' text='Create' as={Link} to="/admin/class/create"/>
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
                        <Dropdown.Item icon='edit' text='View' as={Link} to="/admin/exam/view"/>
                        <Dropdown.Item icon='globe' text='Update' as={Link} to="/admin/exam/update"/>
                        <Dropdown.Item icon='settings' text='Create' as={Link} to="/admin/exam/create"/>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={styleItem} item text='News'  active={activeItem === 'news'} >
         
                    <Dropdown.Menu>
                        <Dropdown.Item icon='edit' text='View' as={Link} to="/admin/news/view" />
                        <Dropdown.Item icon='globe' text='Update' as={Link} to="/admin/news/update" />
                        <Dropdown.Item icon='settings' text='Create' as={Link} to="/admin/news/create" />
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown style={styleItem} item text='Account' >
                    <Dropdown.Menu>
                        <Dropdown.Item icon='edit' text='View' as={Link} to="/admin/account/view" />
                        <Dropdown.Item icon='settings' text='Create' as={Link} to="/admin/account/create" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        )
    }
}
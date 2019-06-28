import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './MenuBar.css'

export default class MenuBar extends React.Component {
    state = { activeItem: 'dashboard' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        const styleItem = { 'lineHeight': '3em', }
        const styleItemAdmin = { 'lineHeight': '3em', 'color': 'rgb(35, 231, 17)' }
        return (
            <Menu inverted vertical style={{ 'width': '25em', 'height': '62em', 'borderRadius': 0 }} >
                <Menu.Item style={styleItemAdmin} as={Link} to="/admin/profile"
                    name='admin'
                    active={activeItem === 'admin'}
                    onClick={this.handleItemClick}
                />

                <Menu.Item style={{ 'color': 'white', 'backgroundColor': 'rgb(55, 59, 55)', 'textAlign': 'center' }}>MAIN NAVIGATION</Menu.Item>
                <Menu.Item style={styleItem} icon='dashboard' as={Link} to="/"
                    name='dashboard'
                    active={activeItem === 'dashboard'}
                    onClick={this.handleItemClick}
                />

                <Menu.Item style={styleItem} icon='student' as={Link} to="/admin/student"
                    name='students'
                    active={activeItem === 'students'}
                    onClick={this.handleItemClick}

                />

                <Menu.Item style={styleItem} icon='user'as={Link} to="/admin/teacher"
                    name='teachers'
                    active={activeItem === 'teachers'}
                    onClick={this.handleItemClick}
                />

                <Menu.Item style={styleItem} icon='users' as={Link} to="/admin/class"
                    name='classes'
                    active={activeItem === 'classes'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item style={styleItem} icon='group' as={Link} to="/admin/attendance"
                    name='attendance'
                    active={activeItem === 'attendance'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item style={styleItem} icon='file alternate'
                    name='course'
                    active={activeItem === 'course'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item style={styleItem} icon='checkmark'
                    name='marks'
                    active={activeItem === 'marks'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item style={styleItem} icon='code'
                    name='exams'
                    active={activeItem === 'exams'}
                    onClick={this.handleItemClick}
                />

                <Menu.Item style={styleItem} icon='newspaper'
                    name='news'
                    active={activeItem === 'news'}
                    onClick={this.handleItemClick}
                />

                <Menu.Item style={styleItem} icon='calendar alternate outline'
                    name='time table'
                    active={activeItem === 'time table'}
                    onClick={this.handleItemClick}
                />

                <Menu.Item style={styleItem} icon='history'
                    name='import history'
                    active={activeItem === 'import history'}
                    onClick={this.handleItemClick}
                />

            </Menu>
        )
    }
}
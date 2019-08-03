import React, { Component } from 'react'
import { Accordion, Icon, Segment, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const styleItem = { 'lineHeight': '1.2em', 'fontSize': '17px' }
const styleMenuBar = { 'width': '25em', 'height': '62em', 'borderRadius': '0px' };
const styleMenuItem = { 'lineHeight': '3.2em', 'fontSize': '17px' };

export default class AccordionExampleInverted extends Component {
  state = { activeIndex: 0, activeItem: '' }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  handleItemClickOnItem = (e, { name }) => {
    const { item } = name
    const { activeItem } = this.state
    const newItem = activeItem === item ? '' : item
    this.setState({ activeItem: newItem })
  }

  render() {
    const { activeIndex, activeItem } = this.state

    return (
      <Segment style={styleMenuBar} inverted>
        <Accordion inverted>
          <Accordion.Title style={styleMenuItem} active={activeIndex === 0} index={0} onClick={this.handleClick} as={Link} to="/admin">
            Admin
          </Accordion.Title>
          <br></br>
          <Accordion.Title style={styleMenuItem} active={activeIndex === 1} index={1} onClick={this.handleClick} as={Link} to="/admin/dashboard">
            Dashboard
          </Accordion.Title>

          <Accordion.Title style={styleMenuItem} active={activeIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Students
          </Accordion.Title>

          <Accordion.Content active={activeIndex === 2}>
            <Menu style={{ 'width': '22em' }} inverted vertical>
              <Menu.Item name='View'
                active={activeItem === 'view'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/news/view"
              />
              <Menu.Item
                name='Create'
                active={activeItem === 'create'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/news/view"
              />
              <Menu.Item
                name='Update'
                active={activeItem === 'update'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/news/view"
              />
            </Menu>
          </Accordion.Content>

          <Accordion.Title style={styleMenuItem} active={activeIndex === 3} index={3} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Teachers
          </Accordion.Title>

          <Accordion.Content active={activeIndex === 3}>
            <Menu style={{ 'width': '22em' }} inverted vertical>
              <Menu.Item name='View'
                active={activeItem === 'view'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/news/view"
              />
              <Menu.Item
                name='Create'
                active={activeItem === 'create'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/news/view"
              />
              <Menu.Item
                name='Update'
                active={activeItem === 'update'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/news/view"
              />
            </Menu>
          </Accordion.Content>

          <Accordion.Title style={styleMenuItem} active={activeIndex === 4} index={4} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Classes
          </Accordion.Title>

          <Accordion.Content active={activeIndex === 4}>
            <Menu style={{ 'width': '22em' }} inverted vertical>
              <Menu.Item name='View'
                active={activeItem === 'view'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/class/view"
              />
              <Menu.Item
                name='Create'
                active={activeItem === 'create'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/class/create"
              />
            </Menu>
          </Accordion.Content>

          <Accordion.Title style={styleMenuItem} active={activeIndex === 5} index={5} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Attendance
          </Accordion.Title>

          <Accordion.Content active={activeIndex === 5}>
            <Menu style={{ 'width': '22em' }} inverted vertical>
              <Menu.Item name='View'
                active={activeItem === 'view'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/dashboard"
              />
              <Menu.Item
                name='Create'
                active={activeItem === 'create'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/dashboard"
              />
              <Menu.Item
                name='Update'
                active={activeItem === 'update'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/dashboard"
              />
            </Menu>
          </Accordion.Content>

          <Accordion.Title style={styleMenuItem} active={activeIndex === 6} index={6} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Courses
          </Accordion.Title>

          <Accordion.Content active={activeIndex === 6}>
            <Menu style={{ 'width': '22em' }} inverted vertical>
              <Menu.Item name='View'
                active={activeItem === 'view'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/course/view"
              />
              <Menu.Item
                name='Create'
                active={activeItem === 'create'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/course/create"
              />
            </Menu>
          </Accordion.Content>

          <Accordion.Title style={styleMenuItem} active={activeIndex === 7} index={7} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Exams
          </Accordion.Title>

          <Accordion.Content active={activeIndex === 7}>
            <Menu style={{ 'width': '22em' }} inverted vertical>
              <Menu.Item name='View'
                active={activeItem === 'view'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/exam/view"
              />
              <Menu.Item
                name='Create'
                active={activeItem === 'create'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/exam/create"
              />
            </Menu>
          </Accordion.Content>

          <Accordion.Title style={styleMenuItem} active={activeIndex === 8} index={8} onClick={this.handleClick}>
            <Icon name='dropdown' />
            News
          </Accordion.Title>

          <Accordion.Content active={activeIndex === 8}>
            <Menu style={{ 'width': '22em' }} inverted vertical>
              <Menu.Item name='View'
                active={activeItem === 'view'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/news/view"
              />
              <Menu.Item
                name='Create'
                active={activeItem === 'create'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/news/create"
              />
            </Menu>
          </Accordion.Content>

          <Accordion.Title style={styleMenuItem} active={activeIndex === 9} index={9} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Accounts
          </Accordion.Title>

          <Accordion.Content active={activeIndex === 9}>
            <Menu style={{ 'width': '22em' }} inverted vertical>
              <Menu.Item
                name='View'
                active={activeItem === 'viewAccounts'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/account/view"
              />
              <Menu.Item
                name='Create'
                active={activeItem === 'create'}
                onClick={this.handleItemClickOnItem}
                as={Link} to="/admin/account/create"
              />
            </Menu>
          </Accordion.Content>
        </Accordion>
      </Segment>
    )
  }
}
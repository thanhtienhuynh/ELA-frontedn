import React from 'react'
import { Menu, Input, Visibility, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ButtonLogin from '../ButtonLogin/ButtonLogin'
import ButtonSignup from '../ButtonSignUp/ButtonSignUp'
const styleLogo={'marginTop': '0.3em', 'fontWeight':'900', 'fontSize': '1.5em', 'fontFamily': 'cursive', 'marginLeft': '1em'}
  
class Header extends React.Component {
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
        const { fixed } = this.state
        const {activeItem} = this.state;
        return (
            <Visibility
                once={false}
                onBottomPassed={this.showFixedMenu}
                onBottomPassedReverse={this.hideFixedMenu}                >
                <Segment
                    vertical
                    inverted
                    textAlign='center'
                    style={{ minHeight: 5, padding: '1em 0em' }}                    
                >
                    <Menu
                        fixed={fixed ? 'top' : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                    >
                        <Menu.Item
                            style={styleLogo} 
                            as={Link} 
                            to="/homepage"
                            icon='audible'
                            name='Udemy'
                        />
                        <Menu.Item position="right">
                            <Input placeholder="search anything..." icon="search" iconPosition="left" size="big"/>
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item 
                                as={Link}  
                                to="/homepage" 
                                name='Home'
                                active={activeItem === 'Home'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item 
                                as={Link}  
                                to="/homepage/course" 
                                name='Courses'
                                active={activeItem === 'Courses'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item 
                                as={Link}  
                                to="/homepage/lectures" 
                                name='Lectures'
                                active={activeItem === 'Lectures'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item 
                                as={Link}  
                                to="/homepage/aboutus" 
                                name='About us'
                                active={activeItem === 'About us'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item>
                                <ButtonLogin as='a' inverted={!fixed}/>
                            </Menu.Item>
                            <Menu.Item>
                                <ButtonSignup as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }} />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </Visibility>
        )
    }
  }

export default Header;
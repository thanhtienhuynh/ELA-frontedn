import React from 'react'
import { Menu, Container, Visibility, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ButtonLogin from '../../GuestView/ButtonLogin/ButtonLogin'
import ButtonSignup from '../../GuestView/ButtonSignUp/ButtonSignUp'
  
class Header extends React.Component {
    state = {}
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
        const { fixed } = this.state
        return (
            <Visibility
                once={false}
                onBottomPassed={this.showFixedMenu}
                onBottomPassedReverse={this.hideFixedMenu}
            >
                <Segment
                    inverted
                    textAlign='center'
                    style={{ minHeight: 5, padding: '1em 0em' }}
                    vertical
                >
                    <Menu
                        fixed={fixed ? 'top' : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                    >
                        <Container>
                            <Menu.Item 
                                    as={Link}  
                                    to="/" 
                                    icon="audible"
                                    active
                                />
                            <Menu.Item 
                                as={Link}  
                                to="/homepage" 
                                name='Home'
                            />
                            <Menu.Item 
                                as={Link}  
                                to="/homepage/course" 
                                name='Courses'
                            />
                            <Menu.Item 
                                as={Link}  
                                to="/homepage/lectures" 
                                name='Lectures'
                            />
                            <Menu.Item 
                                as={Link}  
                                to="/homepage/news" 
                                name='About us'
                            />
                            <Menu.Menu position='right'>
                                <Menu.Item>
                                    <ButtonLogin as='a' inverted={!fixed}/>
                                </Menu.Item>
                                <Menu.Item>
                                    <ButtonSignup as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }} />
                                </Menu.Item>
                            </Menu.Menu>
                        </Container>
                    </Menu>
                </Segment>
            </Visibility>
        )
    }
  }

export default Header;
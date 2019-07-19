import React from 'react'
import { Menu, Container, Responsive, Visibility, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ButtonLogin from '../../GuestView/buttonlogin/ButtonLogin'
import ButtonSignup from '../../GuestView/buttonsignup/ButtonSignUp'
const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }
  
class Header extends React.Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
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
                            <Menu.Item as={Link} to="/homepage" active>
                                Home
                            </Menu.Item>
                            <Menu.Item as='a'>Course</Menu.Item>
                            <Menu.Item as='a'>Lecture</Menu.Item>
                            <Menu.Item as='a'>About us</Menu.Item>
                            <Menu.Item position='right'>
                                <Menu.Item>
                                    <ButtonLogin as='a' inverted={!fixed}/>
                                </Menu.Item>
                                <Menu.Item>
                                    <ButtonSignup as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }} />
                                </Menu.Item>
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
            </Visibility>
  
          {children}
        </Responsive>
      )
    }
  }

export default Header;
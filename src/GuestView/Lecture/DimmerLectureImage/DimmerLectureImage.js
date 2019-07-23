import React, { Component } from 'react'
import { Button, Dimmer, Header, Image } from 'semantic-ui-react'

export default class DimmerImg extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state
    const content = (
      <div>
        <Header as='h2' inverted>
          Ms.Karren
        </Header>

        <Button primary>View More</Button>
      </div>
    )

    return (
      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        size='medium'
        src='https://react.semantic-ui.com/images/wireframe/image.png'
      />
    )
  }
}


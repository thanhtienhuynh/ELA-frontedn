import React, { Component } from 'react'
import { Button, Dimmer, Header, Image, Modal } from 'semantic-ui-react'

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
        <Modal trigger={
          <Button primary>View More</Button>
        }>
          <Modal.Header>Lecture Informarions</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='massive' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        <Modal.Description>
                            <Header>Ms.Karen</Header>
                            Welcome to our English Center!
                            We can help you improve your English skills includes: Reading, Speaking, Writing and Listening. We create an environment where you not only improve your English skills but also develop many other soft skills.
                            
                            Morden Learning Enviroment
                            Our facilities are equipped with state-of-the-art equipment.
                        </Modal.Description>
                    </Modal.Content>
        </Modal>
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


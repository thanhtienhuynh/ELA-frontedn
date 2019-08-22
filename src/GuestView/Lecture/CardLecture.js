    import React, { Component } from 'react'
    import { Dimmer, Header, Image, Popup, Label } from 'semantic-ui-react'

    export default class DimmerExampleEvents extends Component {
    constructor(props){
        super(props);
        this.state = {
            property: props.property
        }
    }

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })

    render() {
        const { images, name, country, DoB, label} = this.state.property;
        const { active } = this.state
        const content = (
        <div>
            <Header as='h2' inverted>
            {name}
            </Header>
        </div>
        )

        return (
        <Popup trigger={
            <Dimmer.Dimmable
            as={Image}
            dimmed={active}
            dimmer={{ active, content }}
            onMouseEnter={this.handleShow}
            onMouseLeave={this.handleHide}
            size='medium'
            src={images}
        />
        }>
            <Popup.Header>{name}</Popup.Header>
            <Popup.Content>
                <p>Country : <b>{country}</b></p>
                <p>Date of Birth : <b>{DoB}</b></p>
                <br />
                {label.map(label => {
                    return <Label color="red" key={label} content={label}/>
                })}
            </Popup.Content>
        </Popup>     
        
        )
    }
    }
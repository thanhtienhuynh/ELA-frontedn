import React from 'react'
import {Grid, Form, Message, Segment, Popup} from 'semantic-ui-react'
import data from '../data/data'
import CardLec from './CardLec'
class LecturePage extends React.Component {
    state = {nameInput: '', submittedName: '', displayMessage: false, list: data.properties, listDisplay: data.properties};
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
    
    handleSubmit = () => {
        var listSubmitted = [];
        const {nameInput, list} = this.state
        for(let i = 0; i < list.length; i++){
            if(list[i].name.toLowerCase().indexOf(nameInput.toLowerCase()) !== -1){
                listSubmitted.push(list[i]);
            }
        }
        if(listSubmitted.length === 0){
            this.setState({displayMessage: true});
        } else {
            this.setState({displayMessage: false})
        }
        this.setState({listDisplay: listSubmitted})
    }
    render(){
        const list = this.state.listDisplay.map(property => {
            return <Grid.Column key={property.id}><CardLec  property={property} /></Grid.Column>
        })
        const { nameInput, displayMessage } = this.state
        return (
            <div>
                <Grid textAlign="center" verticalAlign="middle" style={{'marginTop': '1em'}}>
                    <Popup
                        trigger={
                            <Segment compact style={{'marginBottom': '1em'}}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Input
                                            placeholder="Find lectures..."
                                            name="nameInput"
                                            value={nameInput}
                                            onChange={this.handleChange}
                                            icon="search"
                                            iconPosition="left"
                                        />
                                        <Form.Button primary content="Submit" />
                                    </Form.Group>
                                </Form>
                            </Segment>
                        }
                    >
                        <Popup.Header>Finding lectures by name</Popup.Header>
                    </Popup>
                </Grid>
                <Message warning hidden={!displayMessage}>
                    <Message.Header>No result for you</Message.Header>
                    <p>Please try</p>
                </Message>
                <Grid columns={5} padded >
                    {list}
                </Grid>
            </div>
        );
    }
    
}
export default LecturePage;

import React, { Component } from 'react'
import { Form, Segment,  Dropdown } from 'semantic-ui-react'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const options = [
    { key: 'truefalse', text: 'TrueFalse', value: 'truefalse' },
    { key: 'multichoice', text: 'Multi-choice', value: 'multichoice' },
    { key: 'singlechoice', text: 'Single-choice', value: 'singlechoice' },
  ]

class SegmentAddQuestion extends Component {
    state = {startedDate: '', finishedDate: '', startedTime: '', finishedTime: '', limitedTime: ''}

    
    handleChange = (e, { value }) => this.setState({ value })

    render() {

        return (
            <Segment>
                <Form>
                    <Form.Select required fluid label='Type' style={{'width':'800px'}} options={options} placeholder='Type' />
                    <Form.Input required fluid label='Question' style={{'width':'800px'}} placeholder='Question' />
                    <Form.Input required fluid label='Choice A' style={{'width':'800px'}} placeholder='Choice A' />
                    <Form.Input required fluid label='Choice B' style={{'width':'800px'}} placeholder='Choice B' />
                    <Form.Input required fluid label='Choice C' style={{'width':'800px'}} placeholder='Choice C' />
                    <Form.Input required fluid label='Choice D' style={{'width':'800px'}} placeholder='Choice D' />
                    <Form.Input required fluid label='True Answer' style={{'width':'800px'}} placeholder='True Answer' />
                    <Form.Button positive>Add</Form.Button>
                </Form>
            </Segment>
        )
    }
}

export default SegmentAddQuestion;

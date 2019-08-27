import React, { Component } from 'react'
import { Form, Segment,  Dropdown } from 'semantic-ui-react'
import { Calendar } from 'primereact/calendar';
import { TimePicker } from 'antd';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const options = [
    { key: 'se1319', text: 'SE1319', value: 'se1319' },
    { key: 'se1320', text: 'SE1320', value: 'se1320' },
    { key: 'se1321', text: 'SE1321', value: 'se1321' },
    { key: 'se1322', text: 'SE1322', value: 'se1322' },
    { key: 'se1323', text: 'SE1323', value: 'se1323' },
    { key: 'se1324', text: 'SE1324', value: 'se1324' },
    { key: 'se1325', text: 'SE1325', value: 'se1325' },
    { key: 'se1326', text: 'SE1326', value: 'se1326' },
    { key: 'se1327', text: 'SE1327', value: 'se1327' },
  ]

const optionTest = [
    { key: 'lv1', text: 'Level 1', value: 'level1' },
    { key: 'lv2', text: 'Level 2', value: 'level2' },
    { key: 'lv3', text: 'Level 3', value: 'level3' },
    { key: 'lv4', text: 'Level 4', value: 'level4' },
    { key: 'lv5', text: 'Level 5', value: 'level5' },
    { key: 'lv6', text: 'Level 6', value: 'level6' },
]

const optionLimitedTime = [
    { key: '20p', text: '20 minutes', value: '20minutes' },
    { key: '30p', text: '30 minutes', value: '30minutes' },
    { key: '40p', text: '40 minutes', value: '40minutes' },
    { key: '50p', text: '50 minutes', value: '50minutes' },
    { key: '60p', text: '60 minutes', value: '60minutes' },
    { key: '90p', text: '90 minutes', value: '90minutes' },
]
class SegmentCreateQuiz extends Component {
    state = {startedDate: '', finishedDate: '', startedTime: '', finishedTime: '', limitedTime: ''}

    handleChange = (e, { value }) => this.setState({ value })

    render() {

        return (
            <Segment>
                <Form>
                    <Form.Input required fluid label='Name' style={{'width':'735px'}} placeholder='Name' />
                    <Form.Input required fluid label='Description' style={{'width':'735px'}} placeholder='Description' />
                    <label style={{ 'fontWeight': '800' }}>Started Date</label> <br></br>
                    <Calendar placeholder='Started Date' required style={{ 'marginTop': '0.5em', 'width': '50em', 'marginBottom':'1em' }} value={this.state.startedDate} onChange={(e) => this.setState({ startedDate: e.value })} showButtonBar={true} showIcon={true} ></Calendar> <br></br>
                    <label style={{ 'fontWeight': '800', 'marginTop':'1em' }}>Finished Date</label> <br></br>
                    <Calendar placeholder='Finished Date' required style={{ 'marginTop': '0.5em', 'width': '50em', 'marginBottom':'1em' }} value={this.state.finishedDate} onChange={(e) => this.setState({ finishedDate: e.value })} showButtonBar={true} showIcon={true}></Calendar> <br></br>
                    <label style={{ 'fontWeight': '800', 'marginTop':'1em' }}>Started Time</label> <br></br>
                    <TimePicker style={{ 'fontWeight': '800', 'marginBottom':'1em', 'marginTop':'0.5em' }} value={this.state.startedTime} onChange={(time) => this.setState({ startedTime: time })} /> <br></br>
                    <label style={{ 'fontWeight': '800', 'marginTop':'1em' }}>Finished Time</label> <br></br>
                    <TimePicker style={{ 'fontWeight': '800', 'marginBottom':'1em', 'marginTop':'0.5em' }} value={this.state.finishedTime} onChange={(time) => this.setState({ finishedTime: time })} /> <br></br>
                    <Form.Select required fluid label='Limited Time' style={{'width':'735px'}} options={optionLimitedTime} placeholder='Limited Time' />
                    <Form.Select required fluid label='Test' style={{'width':'735px'}} options={optionTest} placeholder='Test' />
                    <label style={{ 'fontWeight': '800' }}>Classes</label>
                    <Dropdown required style={{'marginTo':'1em', 'marginBottom':'1em', 'width':'735px'}} placeholder='Classes' fluid multiple selection options={options} />

                    <Form.Button positive>Create</Form.Button>
                </Form>
            </Segment>
        )
    }
}

export default SegmentCreateQuiz;
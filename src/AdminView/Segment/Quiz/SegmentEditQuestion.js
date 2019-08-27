import React, { Component } from 'react'
import { Segment, Modal, Button } from 'semantic-ui-react'
import CardQuestion from './CardQuestion';
import { Card, Row } from 'antd';
import SegmentAddQuestion from './SegmentAddQuestion'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class SegmentEditQuestion extends Component {
    state = { startedDate: '', finishedDate: '', startedTime: '', finishedTime: '', limitedTime: '' }

    handleChange = (e, { value }) => this.setState({ value })
    render() {

        return (
            <Segment>
                <Modal trigger={<Button positive style={{ 'fontSize': '10px', 'width': '10em', 'marginBottom':'1em', 'marginLeft': '77em' }} >Add Question</Button>}>
                    <Modal.Content >
                        <Modal.Description>
                            <SegmentAddQuestion></SegmentAddQuestion>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Card title="Question 1" bordered={false}>
                            <CardQuestion></CardQuestion>
                        </Card>
                    </Row>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Card title="Question 1" bordered={false}>
                            <CardQuestion></CardQuestion>
                        </Card>
                    </Row>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Card title="Question 1" bordered={false}>
                            <CardQuestion></CardQuestion>
                        </Card>
                    </Row>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Card title="Question 1" bordered={false}>
                            <CardQuestion></CardQuestion>
                        </Card>
                    </Row>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Card title="Question 1" bordered={false}>
                            <CardQuestion></CardQuestion>
                        </Card>
                    </Row>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Card title="Question 1" bordered={false}>
                            <CardQuestion></CardQuestion>
                        </Card>
                    </Row>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Card title="Question 1" bordered={false}>
                            <CardQuestion></CardQuestion>
                        </Card>
                    </Row>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Card title="Question 1" bordered={false}>
                            <CardQuestion></CardQuestion>
                        </Card>
                    </Row>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Card title="Question 1" bordered={false}>
                            <CardQuestion></CardQuestion>
                        </Card>
                    </Row>
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Card title="Question 1" bordered={false}>
                            <CardQuestion></CardQuestion>
                        </Card>
                    </Row>
                </div>
            </Segment>
        )
    }
}

export default SegmentEditQuestion;

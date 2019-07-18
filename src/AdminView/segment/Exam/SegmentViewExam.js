import React from 'react'
import { Table, Segment } from 'semantic-ui-react'
import Pagination from '../../../CommonComponent/Pagination'

const SegmentViewExam = () => (
    <Segment>
        <Table columns={7}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Course</Table.HeaderCell>
                    <Table.HeaderCell>Started Date</Table.HeaderCell>
                    <Table.HeaderCell>Finished Date</Table.HeaderCell>
                    <Table.HeaderCell>Class</Table.HeaderCell>
                    <Table.HeaderCell>Test</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>Mid Term</Table.Cell>
                    <Table.Cell>IELTS 1</Table.Cell>
                    <Table.Cell>20/07/2019</Table.Cell>
                    <Table.Cell>20/09/2019</Table.Cell>
                    <Table.Cell>SE1319, SE1302, SE1519, SE1999</Table.Cell>
                    <Table.Cell>IE1</Table.Cell>
                    <Table.Cell>Active</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Practical 1</Table.Cell>
                    <Table.Cell>IELTS 5</Table.Cell>
                    <Table.Cell>20/07/2019</Table.Cell>
                    <Table.Cell>20/09/2019</Table.Cell>
                    <Table.Cell>SE1319, SE1302, SE1519, SE1999</Table.Cell>
                    <Table.Cell>PE1</Table.Cell>
                    <Table.Cell>Active</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Listening</Table.Cell>
                    <Table.Cell>IELTS 3</Table.Cell>
                    <Table.Cell>20/07/2019</Table.Cell>
                    <Table.Cell>20/09/2019</Table.Cell>
                    <Table.Cell>SE1319, SE1302, SE1519, SE1999</Table.Cell>
                    <Table.Cell>IE3</Table.Cell>
                    <Table.Cell>Active</Table.Cell>
                </Table.Row>
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell>3 Exams</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Footer>
        </Table>
        <div style={{ 'marginTop': '41em', 'textAlign': 'center' }}>
            <Pagination ></Pagination>
        </div>
    </Segment>
)

export default SegmentViewExam;

import React from 'react'
import { Table, Segment } from 'semantic-ui-react'
import Pagination from '../../../CommonComponent/Pagination'

const a =   (null == undefined) ? "c":"d";

const SegmentViewClass = () => (
    <Segment>
        <Table columns={9}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>{a}</Table.HeaderCell>
                    <Table.HeaderCell>Course</Table.HeaderCell>
                    <Table.HeaderCell>Started Date</Table.HeaderCell>
                    <Table.HeaderCell>Finished Date</Table.HeaderCell>
                    <Table.HeaderCell>Slot</Table.HeaderCell>
                    <Table.HeaderCell>Total Slot</Table.HeaderCell>
                    <Table.HeaderCell>Min Student</Table.HeaderCell>
                    <Table.HeaderCell>Max Student</Table.HeaderCell>
                    <Table.HeaderCell>Current Student</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>SE1319</Table.Cell>
                    <Table.Cell>IELTS 1</Table.Cell>
                    <Table.Cell>20/07/2019</Table.Cell>
                    <Table.Cell>20/09/2019</Table.Cell>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell>20</Table.Cell>
                    <Table.Cell>6</Table.Cell>
                    <Table.Cell>10</Table.Cell>
                    <Table.Cell>7</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>SE1329</Table.Cell>
                    <Table.Cell>IELTS 5</Table.Cell>
                    <Table.Cell>20/07/2019</Table.Cell>
                    <Table.Cell>20/09/2019</Table.Cell>
                    <Table.Cell>4</Table.Cell>
                    <Table.Cell>20</Table.Cell>
                    <Table.Cell>6</Table.Cell>
                    <Table.Cell>10</Table.Cell>
                    <Table.Cell>7</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>SE139</Table.Cell>
                    <Table.Cell>IELTS 3</Table.Cell>
                    <Table.Cell>20/07/2019</Table.Cell>
                    <Table.Cell>20/09/2019</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>20</Table.Cell>
                    <Table.Cell>6</Table.Cell>
                    <Table.Cell>10</Table.Cell>
                    <Table.Cell>7</Table.Cell>
                </Table.Row>
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell>3 Class</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Footer>
        </Table>
        <div style={{ 'marginTop': '41em','textAlign':'center'}}>
            <Pagination ></Pagination>
        </div>
    </Segment>
)

export default SegmentViewClass;

import React from 'react'
import { Table, Segment, Input } from 'semantic-ui-react'
import Pagination from '../../../CommonComponent/Pagination'
import SortBar from '../../../CommonComponent/SortBar'

const SegmentViewAccount = () => (
    <Segment>

        <Input icon='users' iconPosition='left' placeholder='Search users...' />
        <SortBar style={{ 'marginRight': '2em' }}></SortBar>

        <Table columns={7}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>User Name</Table.HeaderCell>
                    <Table.HeaderCell>Password</Table.HeaderCell>
                    <Table.HeaderCell>Phone</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Role</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>TienHT</Table.Cell>
                    <Table.Cell>********</Table.Cell>
                    <Table.Cell>0362892891</Table.Cell>
                    <Table.Cell>Huynh</Table.Cell>
                    <Table.Cell>Tien</Table.Cell>
                    <Table.Cell>Admin</Table.Cell>
                    <Table.Cell style={{'color':'green'}}>Active</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>MinhHY</Table.Cell>
                    <Table.Cell>********</Table.Cell>
                    <Table.Cell>0123456789</Table.Cell>
                    <Table.Cell>Hoang</Table.Cell>
                    <Table.Cell>Minh</Table.Cell>
                    <Table.Cell>Admin</Table.Cell>
                    <Table.Cell style={{'color':'red'}}>Block</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>BinhTT</Table.Cell>
                    <Table.Cell>********</Table.Cell>
                    <Table.Cell>0123456789</Table.Cell>
                    <Table.Cell>Truong</Table.Cell>
                    <Table.Cell>Binh</Table.Cell>
                    <Table.Cell>Admin</Table.Cell>
                    <Table.Cell style={{'color':'green'}}>Active</Table.Cell>
                </Table.Row>
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell>3 People</Table.HeaderCell>
                    <Table.HeaderCell>2 Approved</Table.HeaderCell>
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

export default SegmentViewAccount;

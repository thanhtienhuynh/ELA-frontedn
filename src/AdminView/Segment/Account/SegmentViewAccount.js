
import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import {Segment } from 'semantic-ui-react'
import ButtonEdit from './ButtonEditAccount'
import ButtonDelete from './ButtonDeleteAccount'

const data = [
    {
        key: '1',
        username: 'tienhtse130550',
        password: '**********',
        phone: '0362892891',
        firstname: 'Tien',
        lastname: 'Huynh',
        role: 'Admin',
        status: 'Active'
    },
    {
        key: '2',
        username: 'minhyh',
        password: '**********',
        phone: '0362892891',
        firstname: 'Minh',
        lastname: 'Hoang',
        role: 'Teacher',
        status: 'Active'
    }, {
        key: '3',
        username: 'anhht',
        password: '**********',
        phone: '0362892891',
        firstname: 'Anh',
        lastname: 'Hoang',
        role: 'Guest',
        status: 'Block'
    }, {
        key: '4',
        username: 'hoangng',
        password: '**********',
        phone: '0362892891',
        firstname: 'Hoang',
        lastname: 'Nguyen',
        role: 'Student',
        status: 'Active'
    },
    {
        key: '5',
        username: 'binhtt',
        password: '**********',
        phone: '0362892891',
        firstname: 'Binh',
        lastname: 'Truong',
        role: 'Admin',
        status: 'Active'
    }, {
        key: '6',
        username: 'thangha',
        password: '**********',
        phone: '0362892891',
        firstname: 'Thang',
        lastname: 'Hoang',
        role: 'Student',
        status: 'Block'
    },
];



export default class SegmentViewAccount extends React.Component {

    state = {
        searchText: '',
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
            </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
            </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };


    render() {
        const columns = [
            {
                title: 'User Name',
                dataIndex: 'username',
                key: 'username',
                ...this.getColumnSearchProps('username'),
            },
            {
                title: 'Password',
                dataIndex: 'password',
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
            },
            {
                title: 'First Name',
                dataIndex: 'firstname',
                key: 'firstname',
                sorter: (a, b) => a.firstname.length - b.firstname.length,
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('firstname'),
            },
            {
                title: 'Last Name',
                dataIndex: 'lastname',
                key: 'lastname',
                sorter: (a, b) => a.lastname.length - b.lastname.length,
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('lastname'),
            },
            {
                title: 'Role',
                dataIndex: 'role',
                key: 'role',
                ...this.getColumnSearchProps('role'),
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                ...this.getColumnSearchProps('status'),
            },
            {
                title: 'Action',
                dataIndex: 'action',
                render: () =>  <div>
                    <ButtonEdit></ButtonEdit>
                    <ButtonDelete></ButtonDelete>
                </div>
            },
        ];
        return <Segment><Table columns={columns} dataSource={data} /></Segment> ;
    }
}
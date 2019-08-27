
import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import {Segment } from 'semantic-ui-react'
import ButtonEdit from './ButtonEditQuiz'
import ButtonDelete from './ButtonDeleteQuiz'
import ButtonView from './ButtonView';

const data = [
    {
        key: '1',
        name: 'Practical',
        starteddate: '25/9/2019',
        finisheddate: '30/9/2019',
        test: 'Test 1',
        classes: 'SE1319, SE1320',
        status: 'Active'
    },
    {
        key: '2',
        name: 'Practical',
        starteddate: '25/9/2019',
        finisheddate: '30/9/2019',
        test: 'Test 1',
        classes: 'SE1319, SE1320',
        status: 'Active'
    }, {
        key: '3',
        name: 'Practical',
        starteddate: '25/9/2019',
        finisheddate: '30/9/2019',
        test: 'Test 1',
        classes: 'SE1319, SE1320',
        status: 'Active'
    }, {
        key: '4',
        name: 'Practical',
        starteddate: '25/9/2019',
        finisheddate: '30/9/2019',
        test: 'Test 1',
        classes: 'SE1319, SE1320',
        status: 'Active'
    },
    {
        key: '5',
        name: 'Practical',
        starteddate: '25/9/2019',
        finisheddate: '30/9/2019',
        test: 'Test 1',
        classes: 'SE1319, SE1320',
        status: 'Active'
    }, {
        key: '6',
        name: 'Practical',
        starteddate: '25/9/2019',
        finisheddate: '30/9/2019',
        test: 'Test 1',
        classes: 'SE1319, SE1320',
        status: 'Block'
    },
];



export default class SegmentViewQuiz extends React.Component {

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
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Started Date',
                dataIndex: 'starteddate',
                key: 'starteddate',
                sorter: (a, b) => a.starteddate.length - b.starteddate.length,
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('starteddate'),
            },
            {
                title: 'Finished Date',
                dataIndex: 'finisheddate',
                key: 'finisheddate',
                sorter: (a, b) => a.finisheddate.length - b.finisheddate.length,
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('finisheddate'),
            },
            {
                title: 'Test',
                dataIndex: 'test',
                key: 'test',
                sorter: (a, b) => a.test.length - b.test.length,
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('test'),
            },
            {
                title: 'Classes',
                dataIndex: 'classes',
                key: 'classes',
                sorter: (a, b) => a.classes.length - b.classes.length,
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('classes'),
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
                    <ButtonView></ButtonView>
                </div>
            },
        ];
        return <Segment><Table columns={columns} dataSource={data} /></Segment> ;
    }
}
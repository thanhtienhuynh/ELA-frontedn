import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'name', text: 'By name', value: 'By name' },
  { key: 'status', text: 'By status', value: 'By status' },
  { key: 'date', text: 'By date', value: 'By date' },
]

const SortBar = () => <Dropdown placeholder='Sort by' clearable options={options} selection />

export default SortBar;

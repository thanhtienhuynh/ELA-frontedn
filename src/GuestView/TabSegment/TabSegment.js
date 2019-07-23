import React from 'react'
import { Tab, Segment } from 'semantic-ui-react'
import News from '../News/News'
import Comments from '../Comments/Comments'
const panes = [
  { menuItem: 'News', render: () => <Tab.Pane><News /></Tab.Pane> },
  { menuItem: 'Comments', render: () => <Tab.Pane><Comments /></Tab.Pane> },
]

const TabSegment = () => (
  <Segment>
  <Tab panes={panes} style={{'marginTop': '1em'}}/>
  </Segment>
)

export default TabSegment;
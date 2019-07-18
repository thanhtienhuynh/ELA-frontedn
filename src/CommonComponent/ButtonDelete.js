import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const styleButton = { 'marginTop': '0em', 'marginLeft':'82em' };

class ButtonYN extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Modal
                trigger={< Button negative style={styleButton} >{this.props.name}</Button >}
                header={this.props.header}
                content={this.props.content}
                actions={['Decline', { key: 'done', content: 'Done', positive: true }]}
            ></Modal >
        )
    }
}

export default ButtonYN;
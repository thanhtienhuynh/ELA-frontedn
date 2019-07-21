import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const styleButton = { 'marginTop': '2em' };

class ButtonYN extends React.Component {
    render() {
        return (
            <Modal
                trigger={< Button positive style={styleButton} >{this.props.name}</Button >}
                header={this.props.header}
                content={this.props.content}
                actions={['Decline', { key: 'done', content: 'Done', positive: true }]}
            ></Modal >
        )
    }
}

export default ButtonYN;
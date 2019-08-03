import React, {Component} from 'react';
import {Divider, Grid, Button, Icon} from 'semantic-ui-react'
import {CSSTransition} from 'react-transition-group'
import data from './data/data'
import HomeCourse from './HomeCourse'
const styleCourse = {'marginTop': '1em', 'marginLeft' : '1em', 'marginRight': '1em'}

class Course extends Component {

    constructor(props){
        super(props);
        this.state = {
          appearHome: true,
          property: data.properties[0]
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
          property: data.properties[newIndex]
        })
    }

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
          property: data.properties[newIndex]
        })
    }
    render() {
        const {property} = this.state;
        return (
            <div style={styleCourse}>
                <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <a href="#">Course</a>
                </Divider>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3} textAlign="center" verticalAlign="middle">
                            <Button color="youtube" circular size="big" icon="arrow left" disabled={property.index === 0} onClick={() => this.prevProperty()}></Button>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <CSSTransition
                                in={true}
                                appear={true}
                                timeout={1000}
                            >
                                <HomeCourse property={property} />         
                            </CSSTransition>
                        </Grid.Column>
                        <Grid.Column width={3} textAlign="center" verticalAlign="middle">
                            <Button color="youtube" circular size="big" icon="arrow right" disabled={property.index === data.properties.length-1} onClick={() => this.nextProperty()}></Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Course;
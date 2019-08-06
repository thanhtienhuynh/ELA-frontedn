import React, {Component} from 'react';
import {Divider} from 'semantic-ui-react'
import data from './data/data';
import OwlCarouselBar from './OwlCarouselBar';
const styleCourse = {'marginTop': '1em', 'marginLeft' : '1em', 'marginRight': '1em'}
class Course extends Component {
    state={properties: data.properties};
    render() {
        return (
            <div style={styleCourse}>
                <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <a href="homepage/courses">Course</a>
                </Divider>
                <OwlCarouselBar properties={this.state.properties}/>
            </div>
        );
    }
}

export default Course;
import React from 'react';
import {Input, Divider, Grid, Rating, Button, Icon} from 'semantic-ui-react';
import CourseDetail from './CourseDetail/CourseDetail';
const styleCourse = {'marginTop': '1em', 'marginLeft' : '1em', 'marginRight': '1em'}
const Course = () => {
    return (
        <div style={styleCourse}>
            <Divider
            as='h1'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
            <a href="#"><Icon name="book"/>Courses</a>
        </Divider>
            <Grid columns="equal">
                <Grid.Row>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                        <Button circular icon="arrow left" size="massive" color="youtube"></Button>
                    </Grid.Column>
                    <Grid.Column >
                        <CourseDetail
                            title="Let's go 3"
                            img="http://covermaterial.com/quotes/wp-content/uploads/2017/08/blackbuckramlarge-1-300x300.jpeg"
                            des="Description 1"
                            content="Conten 1"
                            price="200$"    
                            date="7/6/2019"
                            imgCourse="http://sachtienganhgiare.vn/wp-content/uploads/2018/01/Let%E2%80%99s-go-3-phi%C3%AAn-b%E1%BA%A3n-3-student-book.jpg"
                        >
                            <Rating icon='star' defaultRating={3} maxRating={4} />
                        </CourseDetail>
                    </Grid.Column>
                    <Grid.Column >
                    <CourseDetail
                            title="Summit 1"
                            img="http://covermaterial.com/quotes/wp-content/uploads/2017/08/blackbuckramlarge-1-300x300.jpeg"
                            des="Description 2"
                            content="Conten 2"
                            price="200$"    
                            date="7/19/2019"
                            imgCourse="https://images-na.ssl-images-amazon.com/images/I/41DMBMuzCrL._SX380_BO1,204,203,200_.jpg"
                        >
                            <Rating icon='star' defaultRating={3.5} maxRating={4} />
                        </CourseDetail>     
                    </Grid.Column>
                    <Grid.Column >
                    <CourseDetail
                            title="Top notch 3"
                            img="http://covermaterial.com/quotes/wp-content/uploads/2017/08/blackbuckramlarge-1-300x300.jpeg"
                            des="Description 3"
                            content="Conten 3"
                            price="120$"    
                            date="7/15/2019"
                            imgCourse="https://www.pearson.co.jp/catalog/cover/9780133928211.jpg"
                        >
                            <Rating icon='star' defaultRating={4} maxRating={4} />
                        </CourseDetail> 
                    </Grid.Column>
                    <Grid.Column textAlign="center" verticalAlign="middle">  
                        <Button circular icon="arrow right" size="massive" color="youtube"></Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid style={{'marginTop':'1em'}}>
                <Grid.Column textAlign="center">
                    <Input focus placeholder="Find course..." icon="search" size="big"/>
                </Grid.Column>
            </Grid>
            

        </div>
    );
}

export default Course;
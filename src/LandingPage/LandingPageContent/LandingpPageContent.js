import React from 'react';
import {Link} from 'react-router-dom'
import {Image, Grid, Divider,Header, Segment, Button, Popup, List} from 'semantic-ui-react'
const LandingPageContent = () => {
    return (
        <div style={{'marginTop':'1em'}}>
            <Segment style={{ padding: '2em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Welcome to our English Center!
                            </Header>
                            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                We can help you improve your English skills includes: Reading, Speaking, Writing and Listening.
                                We create an environment where you not only improve your English skills but also develop many other soft skills.
                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Morden Learning Enviroment
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Our facilities are equipped with state-of-the-art equipment. 
                            </p>
                            <Button primary>See more</Button>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='massive' src='https://giasuviet.com.vn/app/uploads/2016/10/Gia-s%C6%B0-Ti%E1%BA%BFng-Anh-l%E1%BB%9Bp-5-uy-t%C3%ADn-H%C3%A0-N%E1%BB%99i.jpg' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment style={{ padding: '2em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                We have highly qualified teachers!
                            </Header>
                            <p style={{ fontSize: '1.33em', textAlign: 'justify' }}>
                                We have dedicated teachers who are experienced in teaching and always bring attractive and creative lectures.
                                Each class has two teachers to be able to care for all students.
                            </p>
                            <Button primary>See more</Button>
                        </Grid.Column>
                        <Grid.Column width={6} floated="right">
                            <Image bordered rounded size='large' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZY-plbJ9KK-fiTqAkkP-12G-QbTvwVUzcbu3atKDGjO3zRHv' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
                <a href="#1">Course Detail</a>
            </Divider>
            <Grid container stackable columns="equal"  >
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <Segment>
                            <Popup
                                trigger={
                                    <Image style={{'borderColor': 'red', 'borderWidth':'0.5em', 'padding': '0.5em'}} bordered centered circular src="https://vus.edu.vn/Assets/images/find_maugiao.png" size="medium"/>                                
                                }
                                hoverable
                                flowing
                                position="right center"
                            >
                                <Popup.Content>
                                    <List selection animated verticalAlign='middle' divided>
                                        <List.Item>
                                            <Image size="small" src="https://sachtienganhhn.com/wp-content/uploads/2014/11/Lets-Go-1-Student-Book-3rd-edition.jpg" />
                                            <List.Content>
                                                <List.Header>Let's go 1</List.Header>
                                            </List.Content>
                                            </List.Item>
                                        <List.Item>
                                            <Image size="small" src="http://sachtienganhgiare.vn/wp-content/uploads/2018/01/Let%E2%80%99s-go-2-phi%C3%AAn-b%E1%BA%A3n-3-student-book.jpg" />
                                            <List.Content>
                                                <List.Header>Let's go 2</List.Header>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <Image size="small" src="http://sachtienganhgiare.vn/wp-content/uploads/2018/01/Let%E2%80%99s-go-3-phi%C3%AAn-b%E1%BA%A3n-3-student-book.jpg" />
                                            <List.Content>
                                                <List.Header>Let's go 3</List.Header>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Popup.Content>
                            </Popup>
                            <p style={{ fontSize: '1.33em', 'marginTop':'0.5em'}}>3 - 6 years old</p>
                        </Segment>          
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Segment>
                            <Popup
                                trigger={
                                    <Image style={{'borderColor': 'blue', 'borderWidth':'0.5em', 'padding': '0.5em'}} bordered centered circular src="https://vus.edu.vn/Assets/images/find_6_9.png" size="medium"/>                                
                                }
                                hoverable
                                flowing
                                position="right center"
                            >
                                <Popup.Content>
                                    <List selection animated verticalAlign='middle' divided>
                                        <List.Item>
                                            <Image size="small" src="https://www.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/7/9780133928938.jpg" />
                                            <List.Content>
                                                <List.Header>Top notch 1 </List.Header>
                                            </List.Content>
                                            </List.Item>
                                        <List.Item>
                                            <Image size="small" src="http://product.hstatic.net/1000095360/product/upload_93164aa1f6b44ce19e5ce939357007f6_master.jpg" />
                                            <List.Content>
                                                <List.Header>Top notch 2</List.Header>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <Image size="small" src="https://images-na.ssl-images-amazon.com/images/I/41ww30%2BXBqL._SX376_BO1,204,203,200_.jpg" />
                                            <List.Content>
                                                <List.Header>Top notch 3</List.Header>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Popup.Content>
                            </Popup>
                            <p style={{ fontSize: '1.33em', 'marginTop':'0.5em' }}>6 - 12 years old</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Segment>
                            <Popup
                                trigger={
                                    <Image style={{'borderColor': 'green', 'borderWidth':'0.5em', 'padding': '0.5em'}} bordered centered circular src="https://vus.edu.vn/Assets/images/find_10_12.png" size="medium"/>
                                }
                                hoverable
                                flowing
                                position="left center"
                            >
                                <Popup.Content>
                                    <List selection animated verticalAlign='middle' divided>
                                        <List.Item>
                                            <Image size="small" src="https://www.pearson.co.jp/catalog/cover/9780134499581.jpg" />
                                            <List.Content>
                                                <List.Header>Summit 1</List.Header>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <Image size="small" src="https://www.pearson.co.jp/catalog/cover/9780134176888.jpg" />
                                            <List.Content>
                                                <List.Header>Summit 2</List.Header>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Popup.Content>
                            </Popup>
                            <p style={{ fontSize: '1.33em', 'marginTop':'0.5em' }}>12 - 16 years old</p>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column>
                        <Button content="View all courses" primary as={Link} to="/homepage/courses"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default LandingPageContent;
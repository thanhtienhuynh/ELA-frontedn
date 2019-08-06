import React from 'react'
import {Grid, Card, Popup, Image, Input, Pagination, Rating, Divider} from 'semantic-ui-react'

const CoursePage = () => {
    return (
        <div>
            <Grid style={{'paddingTop': '1em'}} padded>
                <Grid.Row>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                        <Popup
                            trigger={<Input fluid icon='search' placeholder='Search...' />}
                            header='Lecture Course'
                            content='You may search by name, price, ages'
                            on='focus'
                            position="bottom right"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '1em 0em', textTransform: 'uppercase' }}
            >
                <a href="#1">3 - 6 YEARS OLD</a>
            </Divider>
            <Grid columns={3} padded>
                <Grid.Row>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Let's go 1</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Let's go 1</Popup.Header>
                            <Popup.Content>
                                <p>Author: ABC</p>
                                <p>During 2 months</p>
                                <p>Started: July 6th, 2019</p>
                                <p>Price: 100$</p>
                                <p>Description: Let's go 1 is a great book for start to learn English.<br />
                                Có nhiều hình ảnh minh họa, nhiều bài tập để rèn luyện.<br /> Phù hợp cho trẻ 3 - 6 tuổi    
                                </p>
                                <Rating icon="star" defaultRating="3" maxRating="5"/>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Let's go 1</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Let's go 1</Popup.Header>
                            <Popup.Content>
                                <p>Author: ABC</p>
                                <p>During 2 months</p>
                                <p>Started: July 6th, 2019</p>
                                <p>Price: 100$</p>
                                <p>Description: Let's go 1 is a great book for start to learn English.<br />
                                Có nhiều hình ảnh minh họa, nhiều bài tập để rèn luyện.<br /> Phù hợp cho trẻ 3 - 6 tuổi    
                                </p>
                                <Rating icon="star" defaultRating="3" maxRating="5"/>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Let's go 1</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Let's go 1</Popup.Header>
                            <Popup.Content>
                                <p>Author: ABC</p>
                                <p>During 2 months</p>
                                <p>Started: July 6th, 2019</p>
                                <p>Price: 100$</p>
                                <p>Description: Let's go 1 is a great book for start to learn English.<br />
                                Có nhiều hình ảnh minh họa, nhiều bài tập để rèn luyện.<br /> Phù hợp cho trẻ 3 - 6 tuổi    
                                </p>
                                <Rating icon="star" defaultRating="3" maxRating="5"/>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid style={{'paddingBottom': '1em'}} padded>
                <Grid.Row>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10}
                    />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '1em 0em', textTransform: 'uppercase' }}
            >
                <a href="#1">6 - 12 YEARS OLD</a>
            </Divider>
            <Grid columns={3} padded>
                <Grid.Row>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Let's go 1</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Let's go 1</Popup.Header>
                            <Popup.Content>
                                <p>Author: ABC</p>
                                <p>During 2 months</p>
                                <p>Started: July 6th, 2019</p>
                                <p>Price: 100$</p>
                                <p>Description: Let's go 1 is a great book for start to learn English.<br />
                                Có nhiều hình ảnh minh họa, nhiều bài tập để rèn luyện.<br /> Phù hợp cho trẻ 3 - 6 tuổi    
                                </p>
                                <Rating icon="star" defaultRating="3" maxRating="5"/>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Let's go 1</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Let's go 1</Popup.Header>
                            <Popup.Content>
                                <p>Author: ABC</p>
                                <p>During 2 months</p>
                                <p>Started: July 6th, 2019</p>
                                <p>Price: 100$</p>
                                <p>Description: Let's go 1 is a great book for start to learn English.<br />
                                Có nhiều hình ảnh minh họa, nhiều bài tập để rèn luyện.<br /> Phù hợp cho trẻ 3 - 6 tuổi    
                                </p>
                                <Rating icon="star" defaultRating="3" maxRating="5"/>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Let's go 1</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Let's go 1</Popup.Header>
                            <Popup.Content>
                                <p>Author: ABC</p>
                                <p>During 2 months</p>
                                <p>Started: July 6th, 2019</p>
                                <p>Price: 100$</p>
                                <p>Description: Let's go 1 is a great book for start to learn English.<br />
                                Có nhiều hình ảnh minh họa, nhiều bài tập để rèn luyện.<br /> Phù hợp cho trẻ 3 - 6 tuổi    
                                </p>
                                <Rating icon="star" defaultRating="3" maxRating="5"/>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid style={{'paddingBottom': '1em'}} padded>
                <Grid.Row>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10}
                    />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider
                as='h1'
                className='header'
                horizontal
                style={{ margin: '1em 0em', textTransform: 'uppercase' }}
            >
                <a href="#1">12 - 18 YEARS OLD</a>
            </Divider>
            <Grid columns={3} padded>
                <Grid.Row>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Let's go 1</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Let's go 1</Popup.Header>
                            <Popup.Content>
                                <p>Author: ABC</p>
                                <p>During 2 months</p>
                                <p>Started: July 6th, 2019</p>
                                <p>Price: 100$</p>
                                <p>Description: Let's go 1 is a great book for start to learn English.<br />
                                Có nhiều hình ảnh minh họa, nhiều bài tập để rèn luyện.<br /> Phù hợp cho trẻ 3 - 6 tuổi    
                                </p>
                                <Rating icon="star" defaultRating="3" maxRating="5"/>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Let's go 1</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Let's go 1</Popup.Header>
                            <Popup.Content>
                                <p>Author: ABC</p>
                                <p>During 2 months</p>
                                <p>Started: July 6th, 2019</p>
                                <p>Price: 100$</p>
                                <p>Description: Let's go 1 is a great book for start to learn English.<br />
                                Có nhiều hình ảnh minh họa, nhiều bài tập để rèn luyện.<br /> Phù hợp cho trẻ 3 - 6 tuổi    
                                </p>
                                <Rating icon="star" defaultRating="3" maxRating="5"/>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Let's go 1</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Let's go 1</Popup.Header>
                            <Popup.Content>
                                <p>Author: ABC</p>
                                <p>During 2 months</p>
                                <p>Started: July 6th, 2019</p>
                                <p>Price: 100$</p>
                                <p>Description: Let's go 1 is a great book for start to learn English.<br />
                                Có nhiều hình ảnh minh họa, nhiều bài tập để rèn luyện.<br /> Phù hợp cho trẻ 3 - 6 tuổi    
                                </p>
                                <Rating icon="star" defaultRating="3" maxRating="5"/>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid style={{'paddingBottom': '1em'}} padded>
                <Grid.Row>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10}
                    />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default CoursePage;
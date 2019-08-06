import React from 'react'
import {Grid, Card, Popup, Image, Input, Pagination} from 'semantic-ui-react'

const LecturePage = () => {
    return (
        <div>
            <Grid style={{'paddingTop': '1em'}} padded>
                <Grid.Row>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                        <Popup
                            trigger={<Input fluid icon='search' placeholder='Search...' />}
                            header='Lecture Search'
                            content='You may search by name, nationality, experiences'
                            on='focus'
                            position="bottom right"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
            <Grid columns={3} padded>
                <Grid.Row>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Miss Karen</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Miss.Karen</Popup.Header>
                            <Popup.Content>
                                <p>Nationality: French</p>
                                <p>Studied: Howard University</p>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Miss Karen</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Miss.Karen</Popup.Header>
                            <Popup.Content>
                                <p>Nationality: French</p>
                                <p>Studied: Howard University</p>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Miss Karen</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Miss.Karen</Popup.Header>
                            <Popup.Content>
                                <p>Nationality: French</p>
                                <p>Studied: Howard University</p>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Miss Karen</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Miss.Karen</Popup.Header>
                            <Popup.Content>
                                <p>Nationality: French</p>
                                <p>Studied: Howard University</p>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Miss Karen</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Miss.Karen</Popup.Header>
                            <Popup.Content>
                                <p>Nationality: French</p>
                                <p>Studied: Howard University</p>
                            </Popup.Content>
                        </Popup>
                    </Grid.Column>
                    <Grid.Column>
                        <Popup 
                            trigger={
                                <Card centered>
                                    <Image src="https://react.semantic-ui.com/images/movies/totoro-horizontal.jpg" />
                                    <Card.Content>
                                        <Card.Header>Miss Karen</Card.Header>
                                    </Card.Content>
                                </Card>
                            }
                            flowing
                            hoverable
                        >
                            <Popup.Header>Miss.Karen</Popup.Header>
                            <Popup.Content>
                                <p>Nationality: French</p>
                                <p>Studied: Howard University</p>
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

export default LecturePage;
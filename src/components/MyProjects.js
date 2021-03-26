import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import SpaceImg from "./images/SpaceScreenshot.png";
import ScheduleImg from "./images/ScheduleScreenshot.png";
import WeatherImg from "./images/WeatherScreenshot.png";
import FWFImg from "./images/FWFScreenshot.png";
import BudgetImg from "./images/BudgetTracker.png";
import FitnessImg from "./images/FitnessTracker.png"


function MyProjects() {
    return (
        <Container fluid id="myProjects" className="container-fluid">
            <Card className="card mb-5">
                <Card.Header className="card-header d-flex mb-0 h2">My Projects</Card.Header>
                <Container fluid>
                    <Row className="justify-content-between">
                    <Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={SpaceImg} />
                            <Card.Body>
                                <Card.Title>On This Day in Space</Card.Title>
                                <Button className="btn bg-white text-muted" href="https://epowelldev.github.io/p01-on-this-day-in-space/">Live Site</Button>
                                <Button className="btn bg-white text-muted" href="https://github.com/epowelldev/p01-on-this-day-in-space">Git Hub</Button>
                            </Card.Body>
                        </Card>
                    </Card>

                    <Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={FWFImg} />
                            <Card.Body>
                                <Card.Title>Feast With Friends</Card.Title>
                                <Button className="btn bg-white text-muted" href="https://feastwithfriendsproject.herokuapp.com/">Live Site</Button>
                                <Button className="btn bg-white text-muted" href="https://github.com/laurenb08/project2">Git Hub</Button>
                            </Card.Body>
                        </Card>
                    </Card>

                    <Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ScheduleImg} />
                            <Card.Body>
                                <Card.Title>Workday Scheduler</Card.Title>
                                <Button className="btn bg-white text-muted" href="https://laurenb08.github.io/workDayScheduler/">Live Site</Button>
                                <Button className="btn bg-white text-muted" href="https://github.com/laurenb08/workDayScheduler">Git Hub</Button>
                            </Card.Body>
                        </Card>
                    </Card>

                    <Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={WeatherImg} />
                            <Card.Body>
                                <Card.Title>Weather Dashboard</Card.Title>
                                <Button className="btn bg-white text-muted" href="https://laurenb08.github.io/weatherDashboard/">Live Site</Button>
                                <Button className="btn bg-white text-muted" href="https://github.com/laurenb08/weatherDashboard">Git Hub</Button>
                            </Card.Body>
                        </Card>
                    </Card>

                    <Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={BudgetImg} />
                            <Card.Body>
                                <Card.Title>Budget Tracker</Card.Title>
                                <Button className="btn bg-white text-muted" href="https://offline-budget-tracker-app-01.herokuapp.com/">Live Site</Button>
                                <Button className="btn bg-white text-muted" href="https://github.com/laurenb08/budgetTracker">Git Hub</Button>
                            </Card.Body>
                        </Card>
                    </Card>

                    <Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={FitnessImg} />
                            <Card.Body>
                                <Card.Title>Fitness Tracker</Card.Title>
                                <Button className="btn bg-white text-muted" href="https://fitness-progress-tracker-01.herokuapp.com/">Live Site</Button>
                                <Button className="btn bg-white text-muted" href="https://github.com/laurenb08/fitnessTracker">Git Hub</Button>
                            </Card.Body>
                        </Card>
                    </Card>
                    </Row>
                </Container>
            </Card>
        </Container>
    )
}

export default MyProjects;
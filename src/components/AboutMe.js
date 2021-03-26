import React from "react";
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Card} from "react-bootstrap";


function AboutMe() {
    return (

        <Container fluid id="aboutMe" className="container-fluid">
            <Row>
                <Card className="card mb-5">
                    <Card.Header className="card-header d-flex justify-content-between mb-0 h2">About Me</Card.Header>
                    <Card.Body>
                        <Card.Text>

                            <p className="ml-3 pt-3">
                                I am a 31 years old, I love to hike, camp, play board
                                games, and workout!
                            </p>
                            <p className="ml-3">
                                In my professional life, I love to work on teams, solve puzzles, and
                                be creative. I have dabbled in coding for several years but got
                                serious about it in 2020 and have fallen in love. It's challenging
                                and exciting and has been a very fulfilling experience for me so
                                far. I'm excited to start making my mark on the world and having a
                                positive impact on others through the world of coding.
                            </p>
                            <p className="ml-3">
                                Please take a look at my projects below, I hope you enjoy them!
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default AboutMe;
import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";


function Footer() {
    return (
        <Container id="contactMe" className="container-fluid" fluid>
            <Card className="card mb-5">
                <Card.Header className="card-header d-flex mb-0 h2">Contact Me</Card.Header>
                <Container fluid>
                    <Row className="justify-content-between">
                        <Card className="text-center w-auto" style={{ width: '18rem' }}>
                            <Card.Body>
                                <svg
                                    width="3em"
                                    height="3em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-phone-vibrate"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 3H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z"
                                    />
                                </svg>
                                <Card.Text>Phone: 425-444-1572</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="text-center w-auto" style={{ width: '18rem' }}>
                            <Card.Body>
                                <svg
                                    width="3em"
                                    height="3em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-envelope"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                                    />
                                </svg>
                                <br />
                                <Card.Link href="mailto: laurenb08@gmail.com">laurenb08@gmail.com</Card.Link>
                            </Card.Body>
                        </Card>

                        <Card className="text-center w-auto" style={{ width: '18rem' }}>
                            <Card.Body>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="3em"
                                    height="3em"
                                    fill="currentColor"
                                    class="bi bi-linkedin"
                                    viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                                <br />
                                <Card.Link href="https://www.linkedin.com/in/lauren-p-01b2141b/"
                                >LinkedIn Profile</Card.Link>
                            </Card.Body>
                        </Card>

                        <Card className="text-center w-auto" style={{ width: '18rem' }}>
                            <Card.Body>
                                <svg
                                    width="3em"
                                    height="3em"
                                    viewBox="0 0 16 16"
                                    class="bi bi-file-earmark-person"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
                                    />
                                    <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                                    />
                                    <path
                                        d="M8 12c4 0 5 1.755 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12z"
                                    />
                                </svg>
                                <br />
                                <Card.Link href="https://drive.google.com/file/d/1kArj8lm3_L97jRlQ8ENeSQ8BqVFwVP3L/view?usp=sharing"
                                >Click here to download my resume</Card.Link>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </Card>
        </Container>
    )
}

export default Footer;
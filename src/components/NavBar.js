import React from "react";
import {Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";

function NavBar() {
    return (

        <Navbar className="mb-5" bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
                <Nav.Link href="#myProjects">My Projects</Nav.Link>
                <Nav.Link href="#contactMe">Contact Me</Nav.Link>
                <Nav.Link to="https://drive.google.com/file/d/19VxsGGtMgYNZMsICsb0gvCY3CWyNakTW/view?usp=sharing">My Resume</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar;
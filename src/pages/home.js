import React from "react";
import HeaderImg from "../components/HeaderImg";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import MyProjects from "../components/MyProjects";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";


function HomePage() {
    return (
        <Container fluid>
            <HeaderImg />
            <NavBar />
            <AboutMe />
            <MyProjects />
            <Footer />
        </Container>
    )
}

export default HomePage;
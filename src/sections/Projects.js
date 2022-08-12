import React from 'react';
import Project from '../components/projects/Project';
import sixlives from '../image/sixlives.png';
import simply from '../image/simply.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () =>{
    return(
        <section className="projects" id="projects">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={1} lg={2} xl={3}></Col>
                    <Col>
                        <Container>
                            <Row>
                                <Col xs={12} className="projects__card">
                                    <Row>
                                        <Col>
                                            <Project img={sixlives} alt="imagen sixlives"/>
                                        </Col>
                                        <Col className="d-flex align-content-center">
                                            <Row className="align-content-center">
                                                <strong>AppCoins</strong>
                                                    <p>In publishing and graphic design, 
                                                    Lorem ipsum is a placeholder </p>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} className="projects__card">
                                    <Row>
                                        <Col className="d-flex align-content-center">
                                            <Project img={simply} alt="imagen simply neon" width="300px"/>
                                        </Col>
                                        <Col className="d-flex align-content-center">
                                            <Row className="align-content-center">
                                                <strong>AppCoins</strong>
                                                    <p>In publishing and graphic design, 
                                                    Lorem ipsum is a placeholder </p>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={1} lg={2} xl={3}></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;
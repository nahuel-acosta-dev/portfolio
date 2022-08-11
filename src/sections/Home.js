/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mail from '../image/icons/gmail.svg';
import Phone from '../image/icons/whatsap_green.svg';
import Linkedin from '../image/icons/linkedin_blue.svg';
import Github from '../image/icons/github_blue.svg';

const Home = ({children}) =>{

    return(
        <section className="home" id="home">
            <Row className="height_maximum">
                <Col>
                    <Row>
                        <Col xs={1} sm={2} md={4}></Col>
                        <Col className="home__card text-center">
                                <div className="home__circle d-flex justify-content-center align-items-center">
                                    <div className="home__perfil"></div>
                                </div>
                                <h1 className="home__text">
                                    In publishing and graphic design, 
                                    Lorem ipsum is a placeholder text commonly 
                                    used to demonstrate the visual.
                                </h1>
                            <Row className="home__contacts">
                                <Col className="home__icon">
                                <a href="https://github.com/nahuel43038" target="_blank" rel="noreferrer">
                                    <img 
                                        src={Github}
                                        width="50px"
                                        alt="git hub"
                                    />
                                </a>
                                </Col>
                                <Col className="home__icon">
                                <a href="mailto:brianacostanahuel2000@gmail.com">
                                    <img 
                                        src={Mail}
                                        width="50px"
                                        alt="mail"
                                        />
                                </a>
                                </Col>
                                <Col className="home__icon">
                                <a href="https://www.linkedin.com/in/nahuel-acosta-2b5423188"
                                target="_blank" rel="noreferrer">
                                    <img 
                                        src={Linkedin}
                                        width="50px"
                                        alt="linkedin"
                                    />
                                </a>
                                </Col>
                                <Col className="home__icon">
                                <a href="tel:+541164729851">
                                    <img 
                                        src={Phone}
                                        width="50px"
                                        alt="phone"
                                    />
                                </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={1} sm={2} md={4}></Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default Home;
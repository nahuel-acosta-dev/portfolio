/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mail from '../../image/icons/mail.svg';
import Phone from '../../image/icons/phone.svg';
import Linkedin from '../../image/icons/linkedin.svg';
import Github from '../../image/icons/github.svg';

const Home = ({children}) =>{

    return(
        <section className="home">
            <Row className="height_maximum">
                <Col xs={{ order: 'last' }} md={{span:7, order: 'first'}}>
                    <Row>
                        <Col md={2}></Col>
                        <Col className="home__texts">
                            <div className="home__title">
                                {children}
                            </div>
                            <div className="home__text">
                                In publishing and graphic design, 
                                Lorem ipsum is a placeholder text commonly 
                                used to demonstrate the visual form of a document or a 
                                typeface without relying on meaningful content.
                            </div>
                            <Row className="home__contacts">
                                <Col>
                                <a href="https://github.com/nahuel43038" target="_blank" rel="noreferrer">
                                    <img 
                                        src={Github}
                                        width="50px"
                                        alt="git hub"
                                    />
                                </a>
                                </Col>
                                <Col>
                                <a href="mailto:brianacostanahuel2000@gmail.com">
                                    <img 
                                        src={Mail}
                                        width="50px"
                                        alt="mail"
                                        />
                                </a>
                                </Col>
                                <Col>
                                <a href="https://www.linkedin.com/in/nahuel-acosta-2b5423188"
                                target="_blank" rel="noreferrer">
                                    <img 
                                        src={Linkedin}
                                        width="50px"
                                        alt="linkedin"
                                    />
                                </a>
                                </Col>
                                <Col>
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
                        <Col md={1}></Col>
                    </Row>
                </Col>
                <Col xs={{ order: 'first' }} md={{span:5, order: 'last'}} className="height_maximum">
                    <div className="home__image height_maximum">
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Home;
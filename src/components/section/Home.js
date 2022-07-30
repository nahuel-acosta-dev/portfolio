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
                <Col md={7}>
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
                            <Row className="home__icons">
                                <Col>
                                    <img 
                                        src={Github}
                                        width="50px"
                                        alt="git hub"
                                    />
                                </Col>
                                <Col>
                                    <img 
                                        src={Mail}
                                        width="50px"
                                        alt="mail"
                                        />
                                </Col>
                                <Col>
                                    <img 
                                        src={Linkedin}
                                        width="50px"
                                        alt="linkedin"
                                    />
                                </Col>
                                <Col>
                                    <img 
                                        src={Phone}
                                        width="50px"
                                        alt="phone"
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Col>
                <Col md={5} className="height_maximum">
                    <div className="home__image height_maximum">
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Home;
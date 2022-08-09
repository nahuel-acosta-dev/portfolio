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
        <section className="home">
            <Row className="height_maximum">
                <Col xs={{ order: 'last' }} sm={{span:7, order: 'first'}}>
                    <Row>
                        <Col md={2}></Col>
                        <Col className="home__texts text-center">
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
                        <Col md={1}></Col>
                    </Row>
                </Col>
                <Col xs={{span: 6,offset:6 , order: 'first' }} sm={{span:5,offset:0, order: 'last'}} className="height_maximum">
                    <div className="height_maximum home__image"></div>
                </Col>
            </Row>
        </section>
    )
}

export default Home;
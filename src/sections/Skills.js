import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import iconHtml from '../image/icons/html.svg';
import iconCss from '../image/icons/css.svg';
import iconJavascript from '../image/icons/javascript.svg';
import iconBootstrap from '../image/icons/bootstrap.svg';
import iconReact from '../image/icons/react.svg';
import iconPython from '../image/icons/python.svg';
import iconDjango from '../image/icons/django.svg';
import iconMysql from '../image/icons/mysql.svg';

const Skills = () =>{

    return(
        <section className="skills" id="skills">
            <div className="bg"></div>
            <div className="bg2"></div>
            <Container>
                <Row className="skills__cont align-self-center align-justify-content-center">
                        <Col md={1}/>
                        <Col sm={12} md>
                            <h2 className="skills__title">Sobre Mi</h2>
                            <p>Mi enfoque en estos días está en el desarrollo front-end, pero tengo 
                                experiencia en diseño. Mi experiencia en 
                                ambos campos conduce a mejores experiencias de usuario en menos tiempo.</p>
                        </Col>
                        <Col sm={12} md>
                            <ul className="skills__dev">
                                <li>
                                    <Row>
                                        <Col xs={2}>
                                            <img src={iconPython} 
                                            alt="icon python"
                                            width="50"
                                            />
                                        </Col>
                                        <Col>
                                            <span>
                                                <strong>AppCoins</strong>
                                                <p>In publishing and graphic design, 
                                                Lorem ipsum is a placeholder </p>
                                            </span>
                                        </Col>
                                    </Row>
                                </li>
                                <li>
                                    <img src={iconDjango} 
                                    alt="icon django"
                                    width="50"
                                    />
                                    <span>
                                        <strong>AppCoins</strong>
                                        <p>In publishing and graphic design, 
                                        Lorem ipsum is a placeholder </p>
                                    </span>
                                </li>
                                <li>
                                    <img src={iconMysql} 
                                    alt="icon Mysql"
                                    width="50"
                                    />
                                    <span>
                                        <strong>AppCoins</strong>
                                        <p>In publishing and graphic design, 
                                        Lorem ipsum is a placeholder </p>
                                    </span>
                                </li>
                            </ul>
                        </Col>
                    </Row>
            </Container>
        </section>
    )
}

export default Skills;

import React from 'react';
import Project from '../components/projects/Project';
import Icon from '../components/icons/Icon';
import sixlives from '../image/sixlives.png';
import simply from '../image/simply.png';
import Bootstrap from '../image/icons/bootstrap.svg';
import Sass from '../image/icons/sass.svg';
import Django from '../image/icons/django.svg';
import MySql from '../image/icons/mysql.svg';
import iconReact from '../image/icons/react.svg';
import Javascript from '../image/icons/javascript.svg';
import Css from '../image/icons/css.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () =>{

    const iconsSixLives = [
        {
            img: Bootstrap,
            name: 'Bootstrap',
            width: '35'
        },
        {
            img: Sass,
            name: 'Sass',
            width: '35'
        },
        {
            img: iconReact,
            name: 'React',
            width: '35'
        },
        {
            img: Django,
            name: 'Django',
            width: '35'
        },
        {
            img: MySql,
            name: 'mysql',
            width: '35'
        },
    ]

    const iconsSimplyNeon = [
        {
            img: Css,
            name: 'Css',
            width: '35'
        },
        {
            img: Bootstrap,
            name: 'Bootstrap',
            width: '35'
        },
        {
            img: Javascript,
            name: 'Javascript',
            width: '35'
        }
    ]

    return(
        <section className="projects" id="projects">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={1} lg={2} xl={3}></Col>
                    <Col>
                        <Container>
                            <Row>
                                <Col xs={12} className="projects__card projects__one">
                                    <Row>
                                        <Col>
                                            <Project img={sixlives} alt="imagen sixlives"
                                            url="https://deploy-frontend-sixlives.vercel.app/"
                                            />
                                        </Col>
                                        <Col className="d-flex align-content-center">
                                            <Row className="align-content-center">
                                                <strong>SixLives</strong>
                                                <span>( Juego del ahorcado )</span>
                                                    <Row className="align-content-center projects__icons">
                                                        {iconsSixLives.map((iconSixLives, i) => (
                                                            <Icon key={i} img={iconSixLives.img}
                                                            name={iconSixLives.name}
                                                            width={iconSixLives.width}/>
                                                        ))
                                                        }
                                                    </Row>
                                                    <a href="https://github.com/nahuel-acosta-dev/one-alura-challenge2.io"
                                                    target="_blank" rel="noreferrer" 
                                                    className="text-decoration-none projects__code"
                                                    >
                                                        Codigo
                                                    </a>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} className="projects__card">
                                    <Row>
                                        <Col className="d-flex align-content-center">
                                            <Project img={simply} alt="imagen simply neon" width="300px"
                                            url="https://github.com/nahuel-acosta-dev/OnePage-SimplyNeon.io"
                                            />
                                        </Col>
                                        <Col className="d-flex align-content-center">
                                            <Row className="align-content-center">
                                                    <strong>Simply Neon</strong>
                                                    <span>( Tienda de luces de neón )</span>
                                                    <Row className="align-content-center projects__icons">
                                                        {iconsSimplyNeon.map((iconSimplyNeon, i) => (
                                                            <Icon key={i}
                                                            img={iconSimplyNeon.img}
                                                            name={iconSimplyNeon.name}
                                                            width={iconSimplyNeon.width}/>
                                                        ))
                                                        }
                                                    </Row>
                                                    <a href="https://nahuel-acosta-dev.github.io/OnePage-SimplyNeon.io/"
                                                    target="_blank" rel="noreferrer" 
                                                    className="text-decoration-none projects__code">
                                                        Codigo
                                                    </a>
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
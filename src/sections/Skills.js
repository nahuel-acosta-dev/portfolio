import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from '../components/icons/Icon';
import Container from 'react-bootstrap/Container';
import iconJavascript from '../image/icons/javascript.svg';
import iconBootstrap from '../image/icons/bootstrap.svg';
import iconSass from '../image/icons/sass.svg';
import iconReact from '../image/icons/react.svg';
import iconPython from '../image/icons/python.svg';
import iconDjango from '../image/icons/django.svg';
import iconMysql from '../image/icons/mysql.svg';
import iconPostman from '../image/icons/postman.svg'
import iconGit from '../image/icons/git.svg';
import iconNpm from '../image/icons/npm.svg';

const Skills = () =>{

    const iconsFrontEnd = [
        {
            img: iconBootstrap,
            name: 'Bootstrap',
            width: '40'
        },
        {
            img: iconSass,
            name: 'Sass',
            width: '40'
        },
        {
            img: iconJavascript,
            name: 'Javascript',
            width: '40'
        },
        {
            img: iconReact,
            name: 'React',
            width: '40'
        }

    ]

    const iconsBackEnd = [
        {
            img: iconPython,
            name: 'Python',
            width: '40'
        },
        {
            img: iconDjango,
            name: 'Django',
            width: '40'
        },
        {
            img: iconMysql,
            name: 'Mysql',
            width: '40'
        },
    ]

    const iconsOthers = [
        {
            img: iconPostman,
            name: 'Postman',
            width: '40'
        },
        {
            img: iconNpm,
            name: 'Npm',
            width: '40'
        },
        {
            img: iconGit,
            name: 'Git',
            width: '40'
        },
    ]

    return(
        <section className="skills" id="skills">
            <div className="bg"></div>
            <div className="bg2"></div>
            <Container>
                <Row className="skills__cont align-self-center align-justify-content-center">
                        <Col md={1}/>
                        <Col sm={12} md>
                            <h2 className="skills__title">Sobre Mi</h2>
                            <p>
                                Con habilidades tanto en el Front-End como en el Back-End.
                                Con muchas ganas de seguir sumando la mayor cantidad de conocimientos
                                posibles y obtener una oportunidad en el mundo IT.
                                Abierto a nuevas experiencias y desafíos.
                            </p>
                        </Col>
                        <Col sm={12} md>
                            <ul className="skills__dev">
                                <li>
                                <Container>
                                        <Row>
                                            <strong>Front-End</strong>
                                            {
                                                iconsFrontEnd.map((iconFrontEnd, i) =>(
                                                    <Icon key={i} 
                                                    img={iconFrontEnd.img} 
                                                    name={iconFrontEnd.name}
                                                    width={iconFrontEnd.width}
                                                    />
                                                ))
                                            }
                                        </Row>
                                    </Container>
                                </li>
                                <li>
                                    <Container>
                                        <Row>
                                            <strong>Back-End</strong>
                                            {
                                                iconsBackEnd.map((iconsBackEnd, i) =>(
                                                    <Icon key={i} 
                                                    img={iconsBackEnd.img} 
                                                    name={iconsBackEnd.name}
                                                    width={iconsBackEnd.width}
                                                    />
                                                ))
                                            }
                                        </Row>
                                    </Container>
                                </li>
                                <li>
                                    <Container>
                                        <Row>
                                        <strong>Otras Herramientas</strong>
                                            {
                                                iconsOthers.map((iconOthers, i) => (
                                                    <Icon key={i} 
                                                    img={iconOthers.img}
                                                    name={iconOthers.name}
                                                    width={iconOthers.width}/>
                                                ))
                                            }
                                        </Row>
                                    </Container>
                                </li>
                            </ul>
                        </Col>
                    </Row>
            </Container>
        </section>
    )
}

export default Skills;

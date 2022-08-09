import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import iconHtml from '../image/icons/html.svg';
import iconCss from '../image/icons/css.svg';
import iconJavascript from '../image/icons/javascript.svg';
import iconBootstrap from '../image/icons/bootstrap.svg';
import iconReact from '../image/icons/react.svg';
import iconPython from '../image/icons/python.svg';
import iconDjango from '../image/icons/django.svg';
import iconMysql from '../image/icons/mysql.svg';

const Skills = ({children}) =>{

    return(
        <section className="skills" id="skills">
            <div>
                <Row>
                    <Col xs={1}></Col>
                    <Col className="skills__texts text-center">
                        <div className="skills__title">
                            {children}
                        </div>
                        <div className="skills__text">
                            In publishing and graphic design, 
                            Lorem ipsum is a placeholder text commonly 
                            used to demonstrate the visual form of a document or a 
                            typeface without relying on meaningful content.
                        </div>
                    </Col>
                    <Col xs={1} sm></Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={1}></Col>
                    <Col xs={10} md className="skills__front">
                        <p>DESARROLLO FRONT-END</p>
                        <p>
                            I have extensive knowledge of HTML, CSS and JavaScript (ES6), 
                            experience with the 3 most popular frameworks (React,Vue and Angular) 
                            and TypeScript. Add a lot of curiosity, creativity and a GTD-mentality 
                            and you have a pretty complete picture of me.
                        </p>
                        <Row>
                            <Col>
                                <img 
                                    src={iconHtml}
                                    width="50px"
                                    alt="icon Html"
                                />
                            </Col>
                            <Col>
                                <img 
                                    src={iconCss}
                                    width="50px"
                                    alt="icon Css"
                                />
                            </Col>
                            <Col>
                                <img 
                                src={iconJavascript}
                                width="50px"
                                alt="icon Javascript"
                                />
                            </Col>
                                <Col>
                                    <img 
                                        src={iconBootstrap}
                                        width="50px"
                                        alt="icon Bootstrap"
                                    />
                                </Col>
                                <Col>
                                    <img 
                                    src={iconReact}
                                    width="50px"
                                    alt="icon React"
                                    />
                                </Col>
                        </Row>
                    </Col>
                    <Col md={1}></Col>
                    <Col xs={10} md>
                        <p>DESARROLLO BACK-END</p>
                        <p>
                        I speak the designer mumbo-jumbo and dare to make design decisions while coding. 
                        This saves valuable development time, endless ping-ponging with designers and 
                        often looks even better than the original design. I also do not hesitate to work 
                        out something in Figma or Sketch myself.
                        </p>
                        <Row>
                            <Col md={1}></Col>
                            <Col>
                            <img 
                                src={iconPython}
                                width="50px"
                                alt="icon Html"
                            />
                            </Col>
                            <Col>
                            <img 
                                src={iconDjango}
                                width="50px"
                                alt="icon Html"
                            />
                            </Col>
                            <Col>
                            <img 
                                src={iconMysql}
                                width="50px"
                                alt="icon Html"
                            />
                            </Col>
                            <Col md={3}></Col>
                        </Row>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </div>
        </section>
    )
}

export default Skills;
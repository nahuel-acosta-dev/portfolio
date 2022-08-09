import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = ({children}) =>{

    return(
        <section className="contact" id="contact">
            <Row>
                <Col xs={1}></Col>
                <Col>
                    <div className="contact__title text-center">
                        {children}
                    </div>
                    <div className="contact__text">
                        In publishing and graphic design, 
                        Lorem ipsum is a placeholder text commonly 
                        used to demonstrate the visual form of a document or a 
                        typeface without relying on meaningful content.
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col xs={12} md>
                    <Row>
                        <Col xs={1}></Col>
                        <Col>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </Col>
                <Col xs={12} md>
                    <Row>
                        <Col xs={2} sm={2} md={3} lg={4}></Col>
                        <Col>
                            <div className="contact__card">
                                <Row className="contact__cont--avatar">
                                    <Col xs={2}></Col>
                                    <Col className="contact__avatar"></Col>
                                    <Col xs={2}></Col>
                                </Row>
                                <Row className="contact__cardBody text-white text-center">
                                    <Col xs={12}><strong>Nahuel Acosta</strong></Col>
                                    <Col xs={12}><span>Desarrollador Full-Stack</span></Col>
                                    <Col xs={12}>
                                        <a  href="tel:+541164729851" className="contact__link">
                                            +54 1164729851
                                        </a>
                                    </Col>
                                    <Col xs={12}>
                                        <a  href="mailto:brianacostanahuel2000@gmail.com"
                                        className="contact__link">
                                            Mail
                                        </a>
                                    </Col>
                                    <Col xs={12}>
                                    <a href="https://www.linkedin.com/in/nahuel-acosta-2b5423188"
                                    target="_blank" rel="noreferrer" className="contact__link">
                                        Linkedin
                                    </a>
                                </Col>
                                </Row>
                            </div>
                            Copyright © 2022 Brian Nahuel Acosta All Rights Reserved.
                        </Col>
                        <Col xs={2} sm={2} md={3}></Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )

}

export default Contact;
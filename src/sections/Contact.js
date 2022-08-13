import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Contact = () =>{

    return(
        <section className="contact" id="contact">
            <Container>
                <Row>
                    <Col xs={1}/>
                    <Col>
                        <Row>
                            <Col className="contact__text">
                                <p>Get in Touch</p>
                                <p>Contact me</p>
                            </Col>
                            <Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control className="contact__input" type="email" placeholder="Nombre" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control className="contact__input" type="email" placeholder="email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Mensaje</Form.Label>
                                        <Form.Control className="contact__input" as="textarea" rows={3} placeholder="Mensaje" />
                                    </Form.Group>
                                    <Button variant="warning" type="submit">
                                        enviar
                                    </Button>
                                    </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2}/>
                </Row>
            </Container>
        </section>
    )

}

export default Contact;
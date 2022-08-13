import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Astronauta from '../image/astronauta.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Contact = () =>{

    return(
        <section className="contact" id="contact">
            <Container>
                <Row>
                    <Col lg={1}/>
                    <Col>
                        <Row>
                            <Col xs={12} md>
                                <div className="contact__cont">
                                    <img src={Astronauta} alt="astronauta Imagen"/>
                                </div>
                            </Col>
                            <Col className="contact__form" xs={12} md>
                                <p className="contact__text">Ponerse en Contacto</p>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control className="contact__input" type="text" placeholder="Nombre" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control className="contact__input" type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Mensaje</Form.Label>
                                        <Form.Control className="contact__input" as="textarea" rows={3} 
                                        placeholder="Mensaje" />
                                    </Form.Group>
                                        <Button className="contact__btn" variant="dark" size="lg" type="submit">
                                            <span>enviar</span>
                                        </Button>
                                    </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}/>
                </Row>
            </Container>
        </section>
    )

}

export default Contact;
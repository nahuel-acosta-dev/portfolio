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
            </Row>
        </section>
    )

}

export default Contact;
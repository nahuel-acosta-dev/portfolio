import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Astronauta from '../image/astronauta.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const [show, setShow] = useState(false);

    const sendMail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_8hx1ysg', 'template_plcmsep', e.target, 'RUPS8-x410P5DMfse')
        .then(response => {
            console.log(response)
            setShow('successful');
        })
        .catch(error => {
            console.log(error)
            setShow('err');
        })
    }

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
                            {show &&
                                    <Alert className="contact__alert text-center" variant={
                                        `${show === 'successful' ? "info" : 'danger'}`}>
                                        <span>
                                            {show === 'successful' ?
                                            (<>Gracias por su mensaje! contenstare a la brevedad.</>)
                                            :
                                            (<>
                                                Oh! lo siento aparentemente ocurrio un error al enviar el mensaje.
                                                por favor trate de contactarme a travez de las otras formas de contacto
                                                que deje en mi tarjeta o por linkedin.
                                            </>)
                                        }
                                        </span>
                                        <div className="d-flex justify-content-center">
                                        <Button onClick={() => setShow(false)} variant="outline-info"
                                        style={{marginTop: '20px'}}
                                        >
                                            Cerrar mensaje
                                        </Button>
                                        </div>
                                    </Alert>}
                                <p className="contact__text">Ponerse en Contacto</p>
                                <Form onSubmit={sendMail}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control className="contact__input" type="text" 
                                        placeholder="Nombre..." name="user_name"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control className="contact__input" type="email" 
                                        placeholder="Email..." name="user_email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Mensaje</Form.Label>
                                        <Form.Control className="contact__input" as="textarea" rows={3} 
                                        placeholder="Mensaje..." name="user_message"/>
                                    </Form.Group>
                                        <Button className="contact__btn" variant="dark" size="lg" type="submit">
                                            <span>Enviar</span>
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
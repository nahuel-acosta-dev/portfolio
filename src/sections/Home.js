/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Mail from '../image/icons/gmail.svg';
import Phone from '../image/icons/whatsap_green.svg';
import Linkedin from '../image/icons/linkedin_blue.svg';
import Github from '../image/icons/github_blue.svg';
import useScreenSize from '../hooks/useScreenSize';

const Home = () =>{
    const {width, height} = useScreenSize();
    const [waitingPosition, setWaitingPosition] = useState();
    const [show, setShow] = useState(false);

    //en caso de querer hacer click para desplegar informacion
    //uso, ya que una vez que waitingPosition esta en true significa que ya llego al lugar
    //y solo bastaria con hacer click
    const getPosition = (e) => {
        if(waitingPosition){
        return setShow(true);}
    }

    useEffect(() => {
        setTimeout(() => setWaitingPosition(true), 7500)
    }, [])
    return(
        <section className="home" id="home">
            <Container>
                <Row className="height_maximum">
                    <Col>
                    <Row>
                        <Col>
                            <div className={`home__cont ${waitingPosition && "home__expanded"}` }
                            onClick={e => getPosition(e)}
                            style={waitingPosition ? {left: `44vw`, animation: 'none'}: ({})}>
                                <div className="home__circle">
                                </div>
                                    <Row className="home__contacts text-center">
                                        <p>Brian Nahuel Acosta</p>
                                        <p>Programador Web</p>
                                        <Col className="home__icon">
                                        <a href="https://github.com/nahuel43038" target="_blank" rel="noreferrer">
                                            <img 
                                                src={Github}
                                                width="30px"
                                                alt="git hub"
                                            />
                                        </a>
                                        </Col>
                                        <Col className="home__icon">
                                        <a href="mailto:brianacostanahuel2000@gmail.com">
                                            <img 
                                                src={Mail}
                                                width="30px"
                                                alt="mail"
                                                />
                                        </a>
                                        </Col>
                                        <Col className="home__icon">
                                        <a href="https://www.linkedin.com/in/nahuel-acosta-2b5423188"
                                        target="_blank" rel="noreferrer">
                                            <img 
                                                src={Linkedin}
                                                width="30px"
                                                alt="linkedin"
                                            />
                                        </a>
                                        </Col>
                                        <Col className="home__icon">
                                            <a href="tel:+541164729851">
                                                <img 
                                                    src={Phone}
                                                    width="20px"
                                                    alt="phone"
                                                />
                                            </a>
                                    </Col>
                                        <p>Portafolio</p>
                                        <p>Descargar CV</p>
                                    </Row>
                                </div>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;
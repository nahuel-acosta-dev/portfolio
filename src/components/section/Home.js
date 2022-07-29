import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () =>{

    return(
        <section className="home">
            <Row className="height_maximum">
                <Col md={7}>
                    <Row>
                        <Col md={2}></Col>
                        <Col>
                            <div className="home__title">
                                
                            </div>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Col>
                <Col md={5} className="height_maximum">
                    <div className="home__image height_maximum">

                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Home;
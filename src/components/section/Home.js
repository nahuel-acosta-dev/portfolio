import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () =>{

    return(
        <section className="home">
            <Row>
                <Col md={7}></Col>
                <Col md={5}>
                    <div className="home__image">
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Home;
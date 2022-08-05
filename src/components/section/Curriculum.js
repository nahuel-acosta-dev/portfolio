import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Curriculum = ({children}) =>{

    return(
        <section className="curriculum">
            <Row>
                <Col></Col>
                <Col className="curriculum__texts text-center">
                    <div className="curriculum__title">
                        {children}
                    </div>
                    <div className="curriculum__text">
                        In publishing and graphic design, 
                        Lorem ipsum is a placeholder text commonly 
                        used to demonstrate the visual form of a document or a 
                        typeface without relying on meaningful content.
                    </div>
                </Col>
                <Row>
                    <Col>
                        certificate
                        
                        Education
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Row>
        </section>
    )

}

export default Curriculum;
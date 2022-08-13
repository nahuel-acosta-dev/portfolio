import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CertificateCard = ({institute, title, started, finished, tags, description}) => {

    return(
        <Container className="certificate">
            <p className="certificate__title"><strong>{institute}</strong></p>
            <p>{title}<span> ({started} - {finished})</span></p>
            <Row className="text-center">
                {
                    tags.map((tag, i) => (
                        <Col key={i}>
                            <span className="certificate__tag">{tag}</span>
                        </Col>
                    ))
                }
            </Row>
            <div>
                {description}
            </div>
        </Container>
    )
}

export default CertificateCard;
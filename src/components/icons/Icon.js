import React from 'react';
import Col from 'react-bootstrap/Col';

const Icon = ({img, name, width}) => {

    return(
        <Col>
            <img 
                src={img}
                alt={`logo ${name}`}
                width={width}
                /> {' '}
                <br/>
                <span><strong>{name}</strong></span>
        </Col>
    )
}

export default Icon;
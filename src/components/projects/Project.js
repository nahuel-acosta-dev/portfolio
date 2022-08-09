import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

const Project = ({direction, title, description, img}) => {

    const left = (<>
                    <Col xs={8} sm={6}>
                        <Row>
                            <Col xs={3} sm={1}></Col>
                            <Col xs={4} sm={4} md={3} className="project__preview">
                                <div className="project__stripe">
                                </div>
                                <div className="project__img">
                                    <img 
                                        src={img}
                                        height="100%"
                                        width="100%"
                                        alt={`app ${img}`}
                                    />
                                </div>
                                <div className="project__stripe"></div>
                            </Col>
                            <Col sm={1}></Col>
                            <Col sm className="project__description">
                                <strong>{title}</strong>
                                {description}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2} sm={3}></Col>
                </>)

    const right = (<>
                    <Col xs={8} sm={7}>
                        <Row>
                            <Col xs={3} sm={1}></Col>
                            <Col xs={4} sm={{span:3, order:4}} md={{span:3, order:4}} 
                            className="project__preview project__preview--right">
                                <div className="project__stripe"></div>
                                <div className="project__img">
                                    <img 
                                        src={img}
                                        height="100%"
                                        width="100%"
                                        alt={`app ${img}`}
                                    />
                                </div>
                                <div className="project__stripe"></div>
                            </Col>
                            <Col sm={1} md={2}></Col>
                            <Col xs={{order:2}} md={{order:2}} className="project__description">
                                <strong>{title}</strong>
                                {description}
                            </Col>
                            <Col xs={{span:1, order:3}}></Col>
                        </Row>
                    </Col>
                    <Col xs={2} sm={2} md={1}></Col>
                </>)
        
    

    return(
        <>
            <Row className="project">
                <Col xs={3} sm={3}></Col>
                {
                    direction === 'left' ?
                    left
                    :
                    direction === 'right' &&
                    right
                }
            </Row>
        </>
    )

}

Project.propTypes = {
    direction: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string
};

export default Project;
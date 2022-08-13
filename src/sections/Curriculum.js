import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

import {certificates2021, certificates2022} from '../utils/certificates';
import CertificateCard from '../components/cards/CertificateCard';


const Curriculum = () =>{
    const [showCourse, setShowCourse] = useState(false);

    return(
        <section className="curriculum" id="curriculum">
            <Container>
                <Row>
                    <Col xs sm={8} md={8} lg={5}>
                        <Row>
                            <Col>
                                {
                                    certificates2021.map((certificate, i) => (
                                        <CertificateCard key={`cert-${i}`} 
                                            institute={certificate.institute}
                                            title={certificate.title}
                                            started={certificate.started}
                                            finished={certificate.finished}
                                            tags={certificate.tags}
                                            description={certificate.description}
                                        />
                                    ))
                                }
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item curriculum__accordion">
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div>
                                            {
                                                certificates2022.map((certificate, i) => (
                                                    <CertificateCard key={`cert-${i}`} 
                                                        institute={certificate.institute}
                                                        title={certificate.title}
                                                        started={certificate.started}
                                                        finished={certificate.finished}
                                                        tags={certificate.tags}
                                                        description={certificate.description}
                                                    />
                                                ))
                                            }
                                        </div>
                                        </div>
                                        <h2 className="accordion-header" id="headingOne">
                                            <button onClick={
                                                !showCourse ?
                                                (() => setShowCourse(true))
                                                :
                                                (() => setShowCourse(false))
                                            } className={`accordion-button curriculum__readmore
                                            ${!showCourse && 'shadow'}
                                            `} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <span>{
                                                !showCourse ?
                                                (<>Mostrar más</>)
                                                :
                                                (<>Mostrar menos</>)
                                            }</span>
                                            </button>
                                        </h2>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Curriculum;
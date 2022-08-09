import React, {useEffect,useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import One from '../image/certificates/one.png';
import Harvard from '../image/certificates/harvard.svg';
import Utn from '../image/certificates/utn.svg';
import CodoACodo from '../image/certificates/logocodoacodo.png';

const Curriculum = ({children}) =>{
    const [certificates, setCertificates] = useState();
    const information = [
        {title: 'Certificates', knowledge: "Front-end developer"},
        {title: 'Certificates', knowledge: "Front-end developer"},
        {title: 'Certificates', knowledge: "Front-end developer"},
        {title: 'Certificates', knowledge: "Front-end developer"},
        {title: 'Certificates', knowledge: "Front-end developer"}
    ];

    const getCertificates = async () => {
        const response = await fetch("certificates.json")
        let data = await response.json();

         console.log(response);
         console.log(data);
         if (response.status === 200) {
            return setCertificates(data);
         }
     }
 
     useEffect(() => {
        getCertificates()
    }, []);

    const getImg = (img) => {
        const result = (
            img === 'utn' ?
                Utn
            :
            img === 'one' ?
                One
            :
            img === 'harvard' ?
                Harvard
            :
                CodoACodo
        )

        return result;
    }

    return(
        <section className="curriculum">
            <Row className="justify-content-md-center">
                <Col xs={1}></Col>
                <Col className="curriculum__texts text-center justify-content-center">
                    <div className="curriculum__title text-center">
                        {children}
                    </div>
                    <div className="curriculum__text">
                        In publishing and graphic design, 
                        Lorem ipsum is a placeholder text commonly 
                        used to demonstrate the visual form of a document or a 
                        typeface without relying on meaningful content.
                    </div>
                </Col>
                <Col xs={1} md></Col>
            </Row>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10} md={6}>
                    <Accordion className="curriculum__diplomature">
                        {certificates &&
                            certificates.map((certificate,i) => (
                            <Accordion.Item eventKey={i} key={i} className="curriculum__accordion">
                                <Accordion.Header>
                                    <div className="curriculum__imgs">
                                        <img 
                                            src={getImg(certificate.img)}
                                            width="20px"
                                            alt="icon Html"
                                        />
                                    </div>
                                    {certificate.name}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                    {
                                        certificate.subs.length > 0 ? (
                                            certificate.subs.map((sub,i) => (
                                                <Col xs={12} md key={`sub-${i}`}>
                                                <Accordion className="curriculum__sub">
                                                <Accordion.Item eventKey="0" className="curriculum__accordion">
                                                <Accordion.Header>
                                                    <div  className="curriculum__imgs--sub">
                                                        <img 
                                                        src={getImg(certificate.img)}
                                                        width="20px"
                                                        alt="icon Html"
                                                        /> {' '}
                                                    </div>
                                                    {sub.name} 
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    {sub.description}
                                                </Accordion.Body>
                                                </Accordion.Item>
                                                </Accordion>
                                            </Col>
                                            ))
                                        )
                                        :
                                        (certificate.description)
                                    }
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            ))
                        }
                    </Accordion>
                </Col>
                <Col xs={10} md={4}>
                    <Row>
                    <Col xs={2}></Col>
                    <Col>
                    {
                        information.map((info, i) => (
                            <Card key={i} className="curriculum__info">
                                <Card.Body className="text-center">
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {info.title}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        <strong>
                                            {info.knowledge}
                                        </strong>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        ))
                    }
                    </Col>
                    </Row>
                </Col>
                <Col xs={1}></Col>
            </Row>
        </section>
    )

}

export default Curriculum;
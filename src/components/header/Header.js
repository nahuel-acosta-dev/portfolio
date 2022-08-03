import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
    const available = true;

    return(
        <header className="header">
        <Navbar variant="dark" className="header__navbar" expand="md">
          
          <Container>
              <Navbar.Brand href="#home"> 
                <Row>
                  <Col>
                    <div className="header__avatar">
                      {available &&
                        <div className="header__status"></div>
                      }
                    </div>
                  </Col>
                  <Col>Nahuel Acosta</Col>
                </Row>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Container>
              <Row>
                <Col md={3}></Col>
                <Col className="header__cont">
                    <Nav className="justify-content-center header__navbar--links">
                      <Nav.Link className="header__link" href="#home">Home</Nav.Link>
                      <Nav.Link className="header__link" href="#features">Features</Nav.Link>
                      <Nav.Link className="header__link" href="#pricing">Pricing</Nav.Link>
                      <Nav.Link className="header__link" href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Col>
                <Col md={3}></Col>
              </Row>
              </Container>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )

}

export default Header;
import React from "react";
import logo from '../../logo.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {

    return(
        <header className="header">
        <Navbar variant="white" className="header__navbar" expand="lg">
          <Container>
              <Navbar.Brand href="#home"> 
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
                Nahuel Acosta
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Container>
              <Row>
                <Col md={2}></Col>
                <Col>
                    <Nav className="justify-content-center flex-grow-1 pe-5 header__navbar--links">
                      <Nav.Link className="header__link" href="#home">Home</Nav.Link>
                      <Nav.Link className="header__link" href="#features">Features</Nav.Link>
                      <Nav.Link className="header__link" href="#pricing">Pricing</Nav.Link>
                      <Nav.Link className="header__link" href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Col>
                <Col md={2}></Col>
              </Row>
              </Container>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )

}

export default Header;
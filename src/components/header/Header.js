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
              <Navbar.Brand> 
                <Row>
                    <Col>
                    <div className="dropdown">
                      <button className="btn btn-secondary 
                      dropdown-toggle header__avatar" type="button" 
                      id="dropdownMenuButton1" data-bs-toggle="dropdown" 
                      aria-expanded="false">
                        {available &&
                          <div className="header__status"></div>
                        }
                      </button>

                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a className="dropdown-item" href="https://">
                            <div className="header__status header__status--link"></div>{' '} Disponible
                          </a>
                        </li>
                        <li><a className="dropdown-item" href="https://">Descargar Cv</a></li>
                        <li><a className="dropdown-item" href="https://">Something else here</a></li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="home__name">Nahuel Acosta</Col>
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
                      <Nav.Link className="header__link" href="#skills">Skills</Nav.Link>
                      <Nav.Link className="header__link" href="#projects">Projects</Nav.Link>
                      <Nav.Link className="header__link" href="#curriculum">CV</Nav.Link>
                      <Nav.Link className="header__link" href="#contact">Contact</Nav.Link>
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
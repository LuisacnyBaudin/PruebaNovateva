import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function NavbarInit() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="navbarInit">
        <Container>
          <Navbar.Brand> Nueva Tabla
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className=""
            id="basic-navbar-nav"
          > 
            <Nav > 
            <Button variant="primary">GUARDAR</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarInit;

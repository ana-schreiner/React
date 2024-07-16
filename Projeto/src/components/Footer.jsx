import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Navbar bg="light" variant="light">
        <Container>
          <div className="d-flex flex-column align-items-center text-center">
            <Navbar.Brand style={{ fontSize: '12px' }}>&copy; 2024 - 2025 Todos os direitos reservados</Navbar.Brand>
            <Navbar.Text style={{ fontSize: '10px' }}>Foco Total Fotografia</Navbar.Text>
            <Navbar.Text style={{ fontSize: '10px' }}>Oferecemos ferramentas para imortalizar momentos!</Navbar.Text>
          </div>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/privacidade" style={{ fontSize: '12px', marginBottom: '5px' }}>Política de Privacidade</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;


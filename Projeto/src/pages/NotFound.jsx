import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function NotFound() {
    return (
        <main>
            <h1>Página não encontrada. 404.</h1>
            <Nav className="botoes">
              <Nav.Link className="btn btn-dark" as={Link} to="/">Início</Nav.Link>
            </Nav>
        </main>
    );
}

export default NotFound;
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
      <Container fluid>
        <Navbar.Brand>
          <Link to='/'>The Daily News</Link>{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <NavDropdown title='All News' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                Breaking News
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                International News
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>
                Regular News
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Sports</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.5'>
                Entertainment
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.6'>Culture</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.7'>Arts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>All News</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#features'>Breaking News</Nav.Link>
            <Nav.Link href='#pricing'>International News</Nav.Link>
            <Nav.Link href='#pricing'>Sports</Nav.Link>
            <Nav.Link href='#pricing'>Entertainment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React, { useContext } from 'react';
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='light'
      variant='light'
      className='mb-3'>
      <Container fluid>
        <Navbar.Brand>
          <Link to='/'>The Daily News</Link>{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='m-auto'>
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
          <Nav>
            <Nav.Link href='#'>
              {user?.uid ? (
                <>
                  <span className='me-2'>{user?.displayName} </span>
                  <Button
                    size='sm'
                    onClick={handleLogOut}
                    variant='outline-secondary'>
                    Logout
                  </Button>
                </>
              ) : (
                <Nav>
                  <Nav.Link>
                    {' '}
                    <Link
                      to='/login'
                      className='text-decoration-none text-uppercase text-reset '>
                      {' '}
                      Log In
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      to='/register'
                      className='text-decoration-none text-uppercase text-reset '>
                      {' '}
                      Sign up
                    </Link>
                  </Nav.Link>
                </Nav>
              )}
            </Nav.Link>
            <Nav.Link eventKey={2} href='#'>
              {user?.photoURL ? (
                <Image
                  style={{ height: '2rem' }}
                  roundedCircle
                  src={user?.photoURL}></Image>
              ) : (
                <FaUser className='mt-2'></FaUser>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

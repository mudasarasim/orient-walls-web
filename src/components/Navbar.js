// components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FiSearch, FiUser, FiShoppingBag } from 'react-icons/fi'; // 👈 Outline icons
import { FaStar } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      {/* Top Rating Strip */}
      {/* <div className="bg-dark text-light text-center py-1 small">
        <span className="me-2">
          <img
            src="img/google.png"
            alt="stars"
            style={{ height: '18px' }}
          />
          &nbsp; 4.9
        </span>
        <FaStar className="text-warning" />
        <FaStar className="text-warning" />
        <FaStar className="text-warning" />
        <FaStar className="text-warning" />
        <FaStar className="text-warning me-2" />
        +5000 happy clients
      </div> */}

      {/* Navbar */}
      <BootstrapNavbar expand="lg" className="bg-white shadow-sm px-4 py-3">
        <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold fs-4">
          orient <span className="text-success">wall</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle />
        <BootstrapNavbar.Collapse>
          <Nav className="me-auto" style={{ marginLeft: '70px' }}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/wallpaper">Wallpaper</Nav.Link>
            <NavDropdown title="Collections" id="collections-dropdown">
              <NavDropdown.Item as={Link} to="/collections/office">Office</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/collections/residential">Residential</NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Colors" id="colors-dropdown">
              <NavDropdown.Item as={Link} to="/colors/warm">Warm</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/colors/cool">Cool</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to="/kids">Kids</Nav.Link>
            <NavDropdown title="More" id="more-dropdown">
              <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="align-items-center" style={{fontSize: '27px'}}>
            {/* <Nav.Link><FiSearch /></Nav.Link>
            <Nav.Link><FiUser /></Nav.Link>
            <Nav.Link><FiShoppingBag /></Nav.Link> */}
            <a href="https://wa.me/971524248060" target="_blank" rel="noopener noreferrer">
              <Button variant="dark" className="ms-2 rounded-pill px-4 py-2">
                Book a free visit
              </Button>
            </a>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </>
  );
};

export default Navbar;

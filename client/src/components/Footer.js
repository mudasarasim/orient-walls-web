import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0b0b0b', color: '#ccc', paddingTop: '60px', paddingBottom: '30px', }}>
      <Container>
        <Row className="gy-4">
          {/* Logo & About */}
          <Col md={4}>
            <h4 className="text-white fw-bold mb-3">ORIENT WALLS</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Explore premium wallpaper collections that elevate every space — from playful kids’ rooms to elegant modern interiors.
            </p>
            {/* <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white fs-5"><FaFacebookF /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
              <a href="#" className="text-white fs-5"><FaTwitter /></a>
              <a href="#" className="text-white fs-5"><FaLinkedinIn /></a>
            </div> */}
          </Col>
          
          {/* Quick Links */}
          <Col md={2}>
            <h6 className="text-white fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-light">Home</a></li>
              <li><a href="#" className="text-decoration-none text-light">Collections</a></li>
              <li><a href="#" className="text-decoration-none text-light">About Us</a></li>
              <li><a href="#" className="text-decoration-none text-light">Contact</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={2}>
            <h6 className="text-white fw-semibold mb-3">Contact Us</h6>
            <ul className="list-unstyled text-light small">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2 text-danger" />
                Office 2201, Boulevard Plaza Tower-2, Downtown Dubai, U.A.E
              </li>
              <li className="mb-2">
                <FaPhoneAlt className="me-2 text-danger" />
                +971-52-424-8060
              </li>
               <li className="mb-2">
                <FaEnvelope className="me-2 text-danger" />
                info@orientwall.com
              </li>
            </ul>
          </Col>

          {/* Newsletter Signup */}
          {/* <Col md={4}>
            <h6 className="text-white fw-semibold mb-3">Join Our Newsletter</h6>
            <p className="small text-light">Get the latest updates on new collections and exclusive offers.</p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="rounded-start-pill border-0"
              />
              <Button
                variant="danger"
                className="rounded-end-pill px-4"
                style={{ backgroundColor: '#e71c64', border: 'none' }}
              >
                Subscribe
              </Button>
            </Form>
          </Col> */}
        </Row>

        <hr className="mt-5" style={{ borderColor: '#333' }} />
        <div className="text-center small text-light">
          © {new Date().getFullYear()} Orient Wallpapers. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

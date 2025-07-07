import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaStar, FaTrophy } from 'react-icons/fa';
import './Home.css';
import TestimonialSection from '../components/TestimonialSection';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [kidsWallpapers, setKidsWallpapers] = useState([]);
  const [mainWallpapers, setMainWallpapers] = useState([]);
  const [collectionWallpapers, setCollectionWallpapers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/wallpapers')
      .then(res => {
        const data = res.data;
        setKidsWallpapers(data.filter(item => item.category === 'Kids'));
        setMainWallpapers(data.filter(item => item.category === 'Wallpaper'));
        setCollectionWallpapers(data.filter(item => item.category === 'Residential'));

      })
      .catch(err => console.error('Error fetching wallpapers:', err));
  }, []);

  const renderWallpapers = (items) =>
    items.map((item, index) => (
      <Col xs={6} md={3} key={index}>
        <div className="text-center">
          <div className="rounded shadow-sm overflow-hidden">
            <img
              src={`http://localhost:5000/uploads/${item.image}`}
              alt={item.title}
              className="img-fluid"
              style={{ objectFit: 'cover', width: '100%', height: '230px' }}
            />
          </div>
          <div className="mt-2">
            <div className="fw-medium">{item.title}</div>
            <div className="text-muted small">{item.price}</div>
          </div>
        </div>
      </Col>
    ));
    const kidsDesigns = [
  { title: 'Safari Art Dream', price: '125.00Dhs/sqm', image: 'k1.jpg' },
  { title: 'Safari Landscape', price: '125.00Dhs/sqm', image: 'k2.png' },
  { title: 'Goal!', price: '125.00Dhs/sqm', image: 'k3.png' },
  { title: 'Teddy on clouds', price: '125.00Dhs/sqm', image: 'k4.png' },
  { title: 'Wonderland', price: '125.00Dhs/sqm', image: 'k5.png' },
  { title: 'Fairy Spring', price: '125.00Dhs/sqm', image: 'k6.png' },
  { title: 'Explorer Map', price: '125.00Dhs/sqm', image: 'k7.png' },
  { title: 'Party in a Jungle', price: '125.00Dhs/sqm', image: 'k8.png' },
  { title: 'Meredith', price: '125.00Dhs/sqm', image: 'k9.png' },
  { title: 'Wonder Castle', price: '125.00Dhs/sqm', image: 'k10.png' },
  { title: 'Spring Castle', price: '125.00Dhs/sqm', image: 'k11.png' },
  { title: 'Whimsy Birds - Blue', price: '125.00Dhs/sqm', image: 'k12.png' },
];
  return (
    <div>
       {/* Hero Section */}
      <div
        className="hero-section text-white d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,0.9) 100%), url("img/bg.avif")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '82vh',
          position: 'relative',
        }}
      >
        <Container>
          <div className="row" style={{ marginTop: '150px' }}>
            <div className="col-md-6 mb-4">
              <h1 className="fw-bold fs-1">Transform Your Home in One Visit!</h1>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="fs-5 mb-3">
                A seamless process, stunning results. <br />{' '}
                <span style={{ textAlign: 'left' }}>Let us elevate your interior.</span>
              </p>
              <a href="https://wa.me/971524248060" target="_blank" rel="noopener noreferrer">
                <Button variant="danger" className="rounded-pill px-5 py-2" style={{ border: '2px solid white' }}>
                  Schedule a Free Home Visit &nbsp; →
                </Button>
              </a>
              {/* <div className="mt-3 text-white small">
                <img src="img/google.png" alt="stars" style={{ height: '18px', marginRight: '5px' }} />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" /> &nbsp;
                <a href="#" className="text-decoration-underline text-white">
                  +5 000 happy clients
                </a>
                <br />
                <FaTrophy /> #1 wallpaper company -{' '}
                <a href="#" className="text-white text-decoration-underline">
                  Khaleej Times
                </a>
              </div> */}
            </div>
          </div>
        </Container>
      </div>

      {/* 4 Simple Steps Section */}
       <Container className="text-center my-5">
      <p className="text-uppercase text-muted small">How it works?</p>
      <h2 className="fw-bold mb-5">4 simple steps</h2>

      <div className="row">
        {/* Step 1 */}
        <div className="col-md-3">
          <img
            src="img/first.jpg"
            alt="Step 1"
            className="img-fluid border"
            style={{ height: '200px', width: '100%', objectFit: 'cover' }}
          />
          <div className="mt-3">
            <div className="fw-bold mb-1">
              <span className="badge bg-dark rounded-circle me-2">1</span>
              Browse our designs and select your favorite.
            </div>
            <p className="text-muted small">Or we can also customize for you.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="col-md-3">
          <img
            src="img/second.jpg"
            alt="Step 2"
            className="img-fluid border"
            style={{ height: '200px', width: '100%', objectFit: 'cover' }}
          />
          <div className="mt-3">
            <div className="fw-bold mb-1">
              <span className="badge bg-dark rounded-circle me-2">2</span>
              Book a free visit in Dubai directly in few seconds
            </div>
            <p className="text-muted small">
              Our specialist will come to take measurements & help you choose your design.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="col-md-3">
          <img
            src="img/thirdd.png"
            alt="Step 3"
            className="img-fluid border"
            style={{ height: '200px', width: '100%', objectFit: 'cover' }}
          />
          <div className="mt-3">
            <div className="fw-bold mb-1">
              <span className="badge bg-dark rounded-circle me-2">3</span>
              Get your quotation and confirm order
            </div>
            <p className="text-muted small">
              Our consultant will show our designs & share a quotation on the spot.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="col-md-3">
          <img
            src="img/fourthh.png"
            alt="Step 4"
            className="img-fluid border"
            style={{ height: '200px', width: '100%', objectFit: 'cover' }}
          />
          <div className="mt-3">
            <div className="fw-bold mb-1">
              <span className="badge bg-dark rounded-circle me-2">4</span>
              We typically install <br /> in 3 to 7 days
            </div>
            <p className="text-muted small">
              We take care of everything. <br /> You just enjoy.
            </p>
          </div>
        </div>
      </div>
    </Container>

      {/* <section className="py-5">
        <Container>
          <p className="text-uppercase text-center text-muted small mb-2">Trending Now</p>
          <h2 className="text-center fw-semibold mb-5">Our exclusive kids designs</h2>

          <Row className="g-4">
            {kidsDesigns.map((item, index) => (
              <Col xs={6} md={3} key={index}>
                <div className="text-center">
                  <div className="rounded shadow-sm overflow-hidden">
                    <img
                      src={`  /img/${item.image}`}
                      alt={item.title}
                      className="img-fluid"
                      style={{ objectFit: 'cover', width: '100%', height: '230px' }}
                    />
                  </div>
                  <div className="mt-2">
                    <div className="fw-medium">{item.title}</div>
                    <div className="text-muted small">{item.price}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Button
              variant="dark"
              style={{
                borderRadius: '20px',
                padding: '10px 25px',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              View More
            </Button>
          </div>
        </Container>
      </section> */}


      {/* Wallpaper Collections Section */}
      {/* <Container className="my-5">
        <h2 className="fw-bold text-center mb-4">Explore Our Collections</h2>
        <div className="row"> */}
          {/* Left Column */}
          {/* <div className="col-md-6"> */}
            {/* La Touche Originale */}
            {/* <div className="mb-4 position-relative text-white" style={{ backgroundImage: 'url("img/collection1.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '420px' }}>
              <div className="p-4 h-100 d-flex flex-column justify-content-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))' }}>
                <div className="d-flex justify-content-between align-items-end">
                  <div style={{ width: '60%' }}>
                    <h4 className="fw-bold mb-1">La Touche Originale</h4>
                    <p className="mb-0 fs-6">Discover our new collection, in partnership with French Studio La Touche Originale & 20 designers</p>
                  </div>
                  <div style={{ width: '40%' }} className="text-end">
                    <Button size="sm" variant="light" className="rounded-pill">Show more →</Button>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Abstract */}
            {/* <div className="mb-4 position-relative text-white" style={{ backgroundImage: 'url("img/collection3.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '250px' }}>
              <div className="p-4 h-100 d-flex flex-column justify-content-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))' }}>
                <div className="d-flex justify-content-between align-items-end">
                  <div style={{ width: '60%' }}>
                    <h5 className="fw-bold mb-1">Abstract</h5>
                    <p className="mb-0 fs-6">Spark imagination with our Abstract Collection</p>
                  </div>
                  <div style={{ width: '40%' }} className="text-end">
                    <Button size="sm" variant="light" className="rounded-pill">Show more →</Button>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Modern Touch */}
            {/* <div className="position-relative text-white mb-4" style={{ backgroundImage: 'url("img/collection5.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '250px' }}>
              <div className="p-4 h-100 d-flex flex-column justify-content-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))' }}>
                <div className="d-flex justify-content-between align-items-end">
                  <div style={{ width: '60%' }}>
                    <h5 className="fw-bold mb-1">Modern touch</h5>
                    <p className="mb-0 fs-6">Elevate your living room with a modern touch!</p>
                  </div>
                  <div style={{ width: '40%' }} className="text-end">
                    <Button size="sm" variant="light" className="rounded-pill">Show more →</Button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Right Column */}
          {/* <div className="col-md-6"> */}
            {/* Floral */}
            {/* <div className="mb-4 position-relative text-white" style={{ backgroundImage: 'url("img/collection2.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '250px' }}>
              <div className="p-4 h-100 d-flex flex-column justify-content-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))' }}>
                <div className="d-flex justify-content-between align-items-end">
                  <div style={{ width: '60%' }}>
                    <h5 className="fw-bold mb-1">Floral</h5>
                    <p className="mb-0 fs-6">Drift into serenity with floral & calming designs</p>
                  </div>
                  <div style={{ width: '40%' }} className="text-end">
                    <Button size="sm" variant="light" className="rounded-pill">Show more →</Button>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Kids Creations */}
            {/* <div className="mb-4 position-relative text-white" style={{ backgroundImage: 'url("img/collection4.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '420px' }}>
              <div className="p-4 h-100 d-flex flex-column justify-content-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))' }}>
                <div className="d-flex justify-content-between align-items-end">
                  <div style={{ width: '60%' }}>
                    <h5 className="fw-bold mb-1">Kids creations</h5>
                    <p className="mb-0 fs-6">Stunning designs creating a heaven for your little ones.</p>
                  </div>
                  <div style={{ width: '40%' }} className="text-end">
                    <Button size="sm" variant="light" className="rounded-pill">Show more →</Button>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Natural Vibes */}
            {/* <div className="position-relative text-white" style={{ backgroundImage: 'url("img/collection6.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '250px' }}>
              <div className="p-4 h-100 d-flex flex-column justify-content-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))' }}>
                <div className="d-flex justify-content-between align-items-end">
                  <div style={{ width: '60%' }}>
                    <h5 className="fw-bold mb-1">Natural vibes</h5>
                    <p className="mb-0 fs-6">Drift into serenity with our wallpaper inspired by nature</p>
                  </div>
                  <div style={{ width: '40%' }} className="text-end">
                    <Button size="sm" variant="light" className="rounded-pill">Show more →</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container> */}
      
      {/* Kids Designs */}
      <section className="py-5">
        <Container>
          <p className="text-uppercase text-center text-muted small mb-2">Trending Now</p>
          <h2 className="text-center fw-semibold mb-5">Our exclusive Kids Designs</h2>
          <Row className="g-4">{renderWallpapers(kidsWallpapers.slice(0, 3))}</Row>
          <div className="text-center mt-5">
            <Button as={Link} to="/Kids" variant="dark" className="rounded-pill px-4 py-2">
              View More
            </Button>
          </div>
        </Container>
      </section>

      {/* Office and Residential Collection */}
      <section className="py-5">
        <Container>
          <p className="text-uppercase text-center text-muted small mb-2">Trending Now</p>
          <h2 className="text-center fw-semibold mb-5">Our exclusive Residential Collections</h2>
          <Row className="g-4">{renderWallpapers(collectionWallpapers.slice(0, 3))}</Row>
          <div className="text-center mt-5">
            <Button as={Link} to="/Kids" variant="dark" className="rounded-pill px-4 py-2">
              View More
            </Button>
          </div>
        </Container>
      </section>


      <div
        style={{
          backgroundColor: '#000',
          color: '#fff',
          // backgroundImage: 'url("img/bg2.jpg")', // Replace with correct image path
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          padding: '80px 0',
        }}
      >
        <Container>
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-6">
              <p className="text-uppercase text-muted mb-2" style={{ letterSpacing: '1px' }}>
                PEPS CATEGORIES
              </p>
              <h2 className="fw-bold mb-0" style={{ fontSize: '2.8rem', color: '#76a68b' }}>
                Navigate
              </h2>
              <h2 className="fw-bold mb-3" style={{ fontSize: '2.8rem' }}>
                Through our Collection
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#ccc', maxWidth: '480px' }}>
                Discover wallpapers that capture every mood and style. From modern chic to timeless elegance, find your perfect match. Also browse our stunning range of kids designs.
              </p>
              <a href="https://wa.me/971524248060" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="danger"
                  className="rounded-pill mt-4 px-4 py-2"
                  style={{
                    backgroundColor: '#e71c64',
                    border: 'none',
                    fontWeight: '500',
                  }}
                >
                  Schedule a Free Home Visit →
                </Button>
              </a>
            </div>

            {/* Right Tags */}
            <div className="col-md-6 d-flex flex-wrap justify-content-start mt-4 mt-md-0">
              {[
                'Arab Touch',
                'Modern touch',
                'Floral',
                'Abstract',
                'Natural Vibes',
                'Nature',
                'Sequence',
                'Dreamscape Kids Creations',
                'La Touche Originale',
                'Marble',
                'Tropical',
                'Indian Inspiration',
              ].map((category, idx) => (
                <div
                  key={idx}
                  className="me-2 mb-3"
                  style={{
                    border: '1px solid white',
                    padding: '8px 18px',
                    borderRadius: '30px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Wallpaper */}
      {/* Main Wallpapers */}
      <section className="py-5">
        <Container>
          <p className="text-uppercase text-center text-muted small mb-2">Trending Now</p>
          <h2 className="text-center fw-semibold mb-5">Our exclusive Wallpapers</h2>
          <Row className="g-4">{renderWallpapers(mainWallpapers.slice(0, 4))}</Row>
          <div className="text-center mt-5">
            <Button as={Link} to="/wallpaper" variant="dark" className="rounded-pill px-4 py-2">
              View More
            </Button>
          </div>
        </Container>
      </section>
      
      <TestimonialSection />
    
    <section className="py-5 mb-4">
      <Container>
        <Row className="align-items-center">
          {/* Left: Image */}
          <Col md={6} className="mb-4 mb-md-0">
            <div className="rounded overflow-hidden shadow-sm">
              <img
                src="/img/bg.avif"
                alt="About Us"
                className="img-fluid w-100"
                style={{ borderRadius: '15px', objectFit: 'cover', height: '100%' }}
              />
            </div>
          </Col>

          {/* Right: Text */}
          <Col md={6}>
            <p className="text-uppercase fw-semibold small mb-2">About Us</p>
            <h2 className="fw-bold mb-3">
              Creating Walls That Speak <br /> With Personality & Art
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
              At Orient Wall, we’re passionate about transforming your spaces with high-quality, curated wallpaper collections. 
              From dreamy kid’s rooms to bold, modern styles — every design is a reflection of personality, mood, and creativity.
            </p>
            <p className="text-muted mb-4" style={{ fontSize: '1rem' }}>
              With a team of visionary designers and a commitment to top-notch materials, we turn simple walls into powerful statements.
            </p>  
            <Button
              as={Link}
              to="/about"
              variant="dark"
              size="lg"
              className="rounded-pill px-4"
            >
              Learn More About Us
            </Button>
          </Col>
        </Row>
      </Container>
    </section>


      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/971524248060" target='blank' className="position-fixed bottom-0 end-0 m-4" style={{ zIndex: 1050 }}>
        <FaWhatsapp size={50} color="#25D366" />
      </a>
    </div>
  );
};

export default Home;

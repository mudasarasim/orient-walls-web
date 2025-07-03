import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ProductDetail.css';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';


// Replace with actual imports or public paths
import main1 from '../assets/k1.jpg';
import thumb2 from '../assets/k2.png';
import thumb3 from '../assets/k3.png';
import thumb4 from '../assets/k4.png';
import thumb5 from '../assets/k5.png';

const ProductDetail = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const images = [main1, thumb2, thumb3, thumb4, thumb5];

    return (
        <>
            <div className="container py-5">
                <div className="row align-items-start">
                    {/* Left Side - Image Slider */}
                    <div className="col-md-6">
                        <Swiper
                            modules={[Navigation, Thumbs]}
                            navigation
                            thumbs={{ swiper: thumbsSwiper }}
                            spaceBetween={10}
                            className="main-swiper"
                        >
                            {images.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <img
                                        src={img}
                                        alt={`Product ${idx}`}
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '450px', width: '545px', objectFit: 'cover' }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Thumbnail Swiper */}
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            modules={[Navigation, Thumbs]}
                            spaceBetween={10}
                            slidesPerView={4}
                            className="thumb-swiper mt-3"
                        >
                            {images.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <img
                                        src={img}
                                        alt={`Thumb ${idx}`}
                                        className="img-fluid rounded"
                                        style={{
                                            cursor: 'pointer',
                                            border: '2px solid #ccc',
                                            width: '400px',
                                            height: '90px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </SwiperSlide>

                            ))}
                        </Swiper>
                    </div>

                    {/* Right Side - Product Info */}
                    <div className="col-md-6 mt-2">
                        <h2>Safari Art Dream</h2>
                        <p className="text-muted mb-2">125.00 Dhs/sqm</p>
                        <hr />
                        <h6><strong>What wallpaper are we using?</strong></h6>
                        <p>
                            We exclusively use textured wallpapers with the highest ratings in the US & Europe.
                        </p>

                        <h6><strong>How to order?</strong></h6>
                        <p>
                            Book a free visit. Our specialist will come, take precise measurements and share a quotation on the spot. He will also bring samples.
                        </p>

                        <button className="btn btn-danger btn-lg w-100 my-3 shadow" style={{ borderRadius: '40px' }}>
                            Book a Home visit
                        </button>

                        {/* Features Row */}
                        <div className="d-flex justify-content-between text-center mt-4 flex-wrap">
                            <div className="mx-2">
                                <i className="bi bi-truck fs-4"></i>
                                <p className="mt-1 small">Free delivery<br />& installation</p>
                            </div>
                            <div className="mx-2">
                                <i className="bi bi-clock-history fs-4"></i>
                                <p className="mt-1 small">3-day<br />installation</p>
                            </div>
                            <div className="mx-2">
                                <i className="bi bi-emoji-smile fs-4"></i>
                                <p className="mt-1 small">Satisfied or<br />refunded</p>
                            </div>
                            <div className="mx-2">
                                <i className="bi bi-shield-check fs-4"></i>
                                <p className="mt-1 small">1 year<br />warranty</p>
                            </div>
                        </div>

                        <hr />
                        <p className="text-center text-muted">
                            🏆 The easiest way to get quality wallpapers in Dubai - Khaleej Times
                        </p>
                    </div>
                </div>
            </div>
            {/* How It Works Section */}
            <div className="how-it-works-section py-5" style={{ background: '#20412f', color: '#fff' }}>
                <div className="container text-center">
                    <h6 className="text-uppercase" style={{ letterSpacing: '2px' }}>How It Works</h6>
                    <h2 className="fw-bold mb-5">Personalized experience</h2>
                    <div className="row text-start">
                        {/* Step 1 */}
                        <div className="col-md-3 mb-4">
                            <div className="d-flex align-items-start">
                                <div className="step-number me-3">1</div>
                                <div>
                                    <h6 className="fw-bold">Browse our designs and select your favorite.</h6>
                                    <p className="mb-0">Or we can also customize for you.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="col-md-3 mb-4">
                            <div className="d-flex align-items-start">
                                <div className="step-number me-3">2</div>
                                <div>
                                    <h6 className="fw-bold">Book a free visit in Dubai or get in touch on WhatsApp</h6>
                                    <p className="mb-0">Tell us the size of your wall. Our consultant can also come take measurements & help you choose your design.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="col-md-3 mb-4">
                            <div className="d-flex align-items-start">
                                <div className="step-number me-3">3</div>
                                <div>
                                    <h6 className="fw-bold">Get your quotation and confirm order</h6>
                                    <p className="mb-0">Our consultant will share your pricing with you. Confirm your order without any advance payment.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="col-md-3 mb-4">
                            <div className="d-flex align-items-start">
                                <div className="step-number me-3">4</div>
                                <div>
                                    <h6 className="fw-bold">We deliver & install in 3 days – No advance payment</h6>
                                    <p className="mb-0">We take care of everything. You just enjoy. Only pay if you are happy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
          <section className="py-5 mb-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="text-uppercase fw-semibold small mb-2">Orient Wall Quality</p>
            <h2 className="fw-bold mb-3">
              100% SUSTAINABLE <br />
            </h2>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
              Sustainability is at the core of our operations. Peps Wall is exclusively using textured eco-friendly material. Our wallpaper also holds the highest ratings in the US & Europe, making it the safest wallpaper in the market (also kids friendly!)
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
              Contact Us
            </Button>
          </Col>
          <Col md={6} className="mb-4 mb-md-0">
            <div className="rounded overflow-hidden shadow-sm">
              <img
                src="/img/collection2.png"
                alt="About Us"
                className="img-fluid w-100"
                style={{ objectFit: 'cover', height: '100%' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

        </>
    );
};

export default ProductDetail;

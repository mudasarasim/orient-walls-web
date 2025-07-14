import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './ProductDetail.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const product = state?.product;
  const related = state?.related || [];

  // Collect all available images
  const imageFields = ['image', 'image2', 'image3', 'image4'];
  const mainImages = imageFields
    .map(key => product?.[key])
    .filter(img => img); // only keep non-empty

  return (
    <>
      {/* Product Swiper + Info */}
      <div className="container py-5">
        <div className="row align-items-start">
          {/* Left - Swiper */}
          <div className="col-md-6">
            <Swiper
              modules={[Navigation, Thumbs]}
              navigation
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={10}
              className="main-swiper"
            >
              {mainImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={`https://orient-walls-backend-production.up.railway.app/uploads/${img}`}
                    alt={`Product ${idx}`}
                    className="img-fluid rounded"
                    style={{ maxHeight: '450px', width: '545px', objectFit: 'cover' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[Navigation, Thumbs]}
              spaceBetween={10}
              slidesPerView={4}
              className="thumb-swiper mt-3"
            >
              {mainImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={`https://orient-walls-backend-production.up.railway.app/uploads/${img}`}
                    alt={`Thumb ${idx}`}
                    className="img-fluid rounded"
                    style={{
                      cursor: 'pointer',
                      border: '2px solid #ccc',
                      width: '100%',
                      height: '90px',
                      objectFit: 'cover',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right - Product Info */}
          <div className="col-md-6 mt-2">
            <h2>{product?.title}</h2>
            <p className="text-muted mb-2">{product?.price}</p>
            <hr />
            <h6><strong>What wallpaper are we using?</strong></h6>
            <p>We exclusively use textured wallpapers with the highest ratings in the US & Europe.</p>

            <h6><strong>How to order?</strong></h6>
            <p>Book a free visit. Our specialist will come, take precise measurements and share a quotation on the spot. He will also bring samples.</p>

            <a
              href="https://wa.me/971524248060"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button
                className="btn btn-danger btn-lg w-100 my-3 shadow-sm"
                style={{
                  borderRadius: '50px',
                  fontWeight: '600',
                  letterSpacing: '0.5px',
                  fontSize: '1.1rem',
                  padding: '14px 24px',
                  transition: 'all 0.3s ease-in-out',
                  background: 'linear-gradient(to right, #ff512f, #dd2476)',
                  border: 'none',
                  color: 'white',
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <i className="fa fa-whatsapp me-2"></i>
                Book a Home Visit
              </button>
            </a>

            {/* Features */}
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
            <p className="text-center text-muted">🏆 The easiest way to get quality wallpapers in Dubai - Khaleej Times</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works-section py-5" style={{ background: '#20412f', color: '#fff' }}>
        <div className="container text-center">
          <h6 className="text-uppercase" style={{ letterSpacing: '2px' }}>How It Works</h6>
          <h2 className="fw-bold mb-5">Personalized experience</h2>
          <div className="row text-start">
            {[1, 2, 3, 4].map((step, i) => (
              <div className="col-md-3 mb-4" key={i}>
                <div className="d-flex align-items-start">
                  <div className="step-number me-3">{step}</div>
                  <div>
                    <h6 className="fw-bold">
                      {[
                        "Browse our designs and select your favorite.",
                        "Book a free visit in Dubai or get in touch on WhatsApp",
                        "Get your quotation and confirm order",
                        "We deliver & install in 3 days – No advance payment"
                      ][i]}
                    </h6>
                    <p className="mb-0">
                      {[
                        "Or we can also customize for you.",
                        "Tell us the size of your wall. Our consultant can also come take measurements & help you choose your design.",
                        "Our consultant will share your pricing with you. Confirm your order without any advance payment.",
                        "We take care of everything. You just enjoy. Only pay if you are happy."
                      ][i]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Section */}
      <section className="py-5 mb-4">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-uppercase fw-semibold small mb-2">Orient Wall Quality</p>
              <h2 className="fw-bold mb-3">100% SUSTAINABLE</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
                Sustainability is at the core of our operations. Orient Wall is exclusively using textured eco-friendly material. Our wallpaper also holds the highest ratings in the US & Europe, making it the safest wallpaper in the market (also kids friendly!)
              </p>
              <Button as={Link} to="/about" variant="dark" size="lg" className="rounded-pill px-4">
                Contact Us
              </Button>
            </Col>
            <Col md={6}>
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

      {/* Related Wallpapers */}
      <div className="container my-5">
        <h4 className="mb-4">More Wallpapers in this Category</h4>
        <div className="row">
          {related
            .filter(w => w.id !== product?.id)
            .map((item, idx) => (
              <div className="col-md-3 mb-4" key={idx}>
                <div
                  className="card h-100"
                  onClick={() =>
                    navigate('/product-detail', {
                      state: {
                        product: item,
                        related: related
                      }
                    })
                  }
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={`https://orient-walls-backend-production.up.railway.app/uploads/${item.image}`}
                    className="card-img-top"
                    style={{ height: '180px', objectFit: 'cover' }}
                    alt={item.title}
                  />
                  <div className="card-body text-center">
                    <h6>{item.title}</h6>
                    <p className="text-muted">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const testimonials = [
    {
        name: "Aarav Sharma",
        title: "Interior Designer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "Orient Walls completely transformed my living space. The texture, finish, and elegance of their wallpapers."
    },
    {
        name: "Meera Kapoor",
        title: "Homeowner",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4.5,
        text: "Absolutely in love with the kids’ wallpaper collection. High-quality material and super easy to install!"
    },
    {
        name: "Rishi Verma",
        title: "Architect",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 4,
        text: "Stylish, durable, and elegant wallpapers. It’s now my go-to recommendation for modern home interiors."
    },
    {
        name: "Aarav Sharma",
        title: "Interior Designer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "Orient Walls completely transformed my living space. The texture, finish, and elegance of their wallpapers."
    },
    {
        name: "Meera Kapoor",
        title: "Homeowner",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4.5,
        text: "Absolutely in love with the kids’ wallpaper collection. High-quality material and super easy to install!"
    },
    {
        name: "Rishi Verma",
        title: "Architect",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 4,
        text: "Stylish, durable, and elegant wallpapers. It’s now my go-to recommendation for modern home interiors."
    }
];

const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;

    for (let i = 0; i < full; i++) stars.push(<FaStar key={`full-${i}`} className="text-warning me-1" />);
    if (half) stars.push(<FaStarHalfAlt key="half" className="text-warning me-1" />);
    while (stars.length < 5) stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-warning me-1" />);

    return stars;
};

const TestimonialSwiper = () => {
    return (
        <section style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
            <div className="text-center mb-5">
                <h2 className="fw-bold">What Our Clients Say</h2>
                <p className="text-muted">Real stories from real customers</p>
            </div>

            <div className="container">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 }
                    }}
                >
                    {testimonials.map((testimonial, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-white p-4 shadow rounded text-center h-100 d-flex flex-column justify-content-between">
                                <div>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="rounded-circle mb-3"
                                        style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                                    />
                                    <h6 className="fw-semibold mb-0">{testimonial.name}</h6>
                                    <small className="text-muted">{testimonial.title}</small>
                                </div>
                                <p className="text-muted my-3" style={{ fontStyle: 'italic' }}>"{testimonial.text}"</p>
                                <div>{renderStars(testimonial.rating)}</div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3">
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
            </div>

        </section>
    );
};

export default TestimonialSwiper;

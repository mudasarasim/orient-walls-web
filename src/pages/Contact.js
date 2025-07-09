// pages/ContactUs.js
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

/* eslint-disable no-unused-vars */


const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', form);

      alert('✅ Thank you for contacting us!');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('❌ Failed to send message. Please try again.');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="ms-breadcrumb m-b-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row ms_breadcrumb_inner">
                <div
                  className="col-md-12 col-sm-12 back"
                  style={{
                    background:
                      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("img/bg2.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    padding: '80px 0',
                    textAlign: 'center',
                  }}>
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact and Map Section */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-md-4">
              <div className="contact-box p-4 shadow-sm">
                <div className="icon mb-2"><i className="fa fa-envelope fa-2x"></i></div>
                <h5>Mail</h5>
                <p><i className="fa fa-envelope"></i> info@orientwall.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-box p-4 shadow-sm">
                <div className="icon mb-2"><i className="fa fa-phone fa-2x"></i></div>
                <h5>Contact</h5>
                <p><i className="fa fa-mobile"></i> +971 52 424 8060</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-box p-4 shadow-sm">
                <div className="icon mb-2"><i className="fa fa-map-marker fa-2x"></i></div>
                <h5>Address</h5>
                <p>Office 2201, Boulevard Plaza Tower-2, Downtown Dubai</p>
              </div>
            </div>
          </div>

          <div className="row align-items-stretch">
            {/* <div className="col-lg-6 mb-4">
              <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded-4 h-100">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100">Submit</button>
              </form>
            </div> */}

            <div className="row">
              <div className="col-12 px-0">
                <div className="w-100" style={{ height: '500px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1002194915936!2d55.27129447483751!3d25.199842531594545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6828d6d49ef7%3A0x46d6db9c8521a81a!2sBoulevard%20Plaza%20Tower%202!5e0!3m2!1sen!2sae!4v1751872261250!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
    </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

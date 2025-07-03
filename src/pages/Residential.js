import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const products = [
  { title: 'Safari Art Dream', img: '../img/k1.jpg', price: '125.00Dhs/sqm' },
  { title: 'Safari Landscape', img: '../img/k2.png', price: '125.00Dhs/sqm' },
  { title: 'Goal!', img: '../img/k3.png', price: '125.00Dhs/sqm' },
  { title: 'Teddy on clouds', img: '../img/k4.png', price: '125.00Dhs/sqm' },
  { title: 'Wonderland', img: '../img/k5.png', price: '125.00Dhs/sqm' },
  { title: 'Fairy Spring', img: '../img/k6.png', price: '125.00Dhs/sqm' },
  { title: 'Safari Art Dream', img: '../img/k1.jpg', price: '125.00Dhs/sqm' },
  { title: 'Safari Landscape', img: '../img/k2.png', price: '125.00Dhs/sqm' },
  { title: 'Goal!', img: '../img/k3.png', price: '125.00Dhs/sqm' },
  { title: 'Teddy on clouds', img: '../img/k4.png', price: '125.00Dhs/sqm' },
  { title: 'Wonderland', img: '../img/k5.png', price: '125.00Dhs/sqm' },
  { title: 'Fairy Spring', img: '../img/k6.png', price: '125.00Dhs/sqm' },
];


const Residential = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const navigate = useNavigate();

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (num) => setCurrentPage(num);

  return (
    <>
      {/* Banner */}
      <div className="ms-breadcrumb m-b-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row ms_breadcrumb_inner">
                <div
                  className="col-md-12 col-sm-12 back"
                  style={{
                    background:
                      'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("../img/back1.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    padding: '80px 0',
                    textAlign: 'center',
                  }}>
                  <h2>Residential Collection</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="container my-5">
        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-md-3" style={{ borderRight: '1px solid #ddd' }}>
            <h3 className="mb-3">Filter:</h3><hr />
            <div>
              <h5>Themes</h5><hr />
              <ul className="list-unstyled">
                {[
                  'Animals (113)',
                  'Cute patterns & graffitis (81)',
                  'Dinosaurs (12)',
                  'Flowers (43)',
                  'Football & Cars (18)',
                  'Princess & rainbows (56)',
                  'Safari, Forrest & Jungle (52)',
                  'Sea & boats (6)',
                  'Sky, clouds & space (85)',
                  'World maps & travel (40)',
                ].map((theme, idx) => (
                  <li key={idx}>
                    <label>
                      <input type="checkbox" className="me-2 mb-4" /> {theme}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-md-9">
            <div className="row">
              {currentProducts.map((item, i) => (
                <div
                  className="col-md-4 col-sm-6 col-6 mb-4"
                  key={i}
                  onClick={() => navigate('/product-detail')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card h-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body text-center">
                      <h6 className="card-title mb-1">{item.title}</h6>
                      <p className="text-muted">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                {[...Array(totalPages)].map((_, i) => (
                  <li
                    key={i}
                    className={`page-item ${
                      currentPage === i + 1 ? 'active' : ''
                    }`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(i + 1)}>
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Residential;

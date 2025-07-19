import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
import BASE_URL from "../config"; // import base url

const Kids = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const wallpapersPerPage = 12;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/wallpapers`);
        const kidsWallpapers = res.data.filter(item => item.category === 'Kids');
        setWallpapers(kidsWallpapers);
      } catch (err) {
        console.error('Failed to load wallpapers:', err);
      }
    };
    fetchWallpapers();
  }, []);

  const indexOfLast = currentPage * wallpapersPerPage;
  const indexOfFirst = indexOfLast - wallpapersPerPage;
  const currentWallpapers = wallpapers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(wallpapers.length / wallpapersPerPage);

  const handlePageChange = (num) => setCurrentPage(num);

  const handleClick = (item) => {
    const productWithImages = {
      ...item,
      images: [item.image, item.image, item.image], // or real gallery if available
    };

    navigate('/product-detail', {
      state: {
        product: productWithImages,
        related: wallpapers,
      },
    });
  };

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
                      'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("img/back1.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    padding: '80px 0',
                    textAlign: 'center',
                  }}>
                  <h2>Kids Collection</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <div className="row">
              {currentWallpapers.map((item, i) => (
                <div
                  className="col-md-4 col-sm-6 col-6 mb-4"
                  key={item.id}
                  onClick={() => handleClick(item)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card h-100">
                    <img
                      src={`https://orient-walls-backend-production.up.railway.app/uploads/${item.image}`}
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
                    className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
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

export default Kids;

// pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('admin_user');
    try {
      if (stored && stored !== 'undefined') {
        const parsed = JSON.parse(stored);
        setAdmin(parsed);
      } else {
        navigate('/admin/login');
      }
    } catch (err) {
      console.error('Error parsing admin_user:', err);
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_user');
    navigate('/admin/login');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4 p-4">
        <div className="card-body text-center">
          <h2 className="mb-3">👋 Welcome, <span className="text-primary">{admin?.username || 'Admin'}</span></h2>
          <p className="lead text-muted">You are logged into the admin panel.</p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <button
              className="btn btn-success px-4"
              onClick={() => navigate('/admin/add-wallpaper')}
            >
              ➕ Add Wallpaper
            </button>
             <button
              className="btn btn-success px-4"
              onClick={() => navigate('/admin/wallpapers')}
            >
              ➕ CRUD System Wallpaper
            </button>

            <button
              className="btn btn-info px-4"
              onClick={() => navigate('/admin/messages')}
            >
              📬 View Contact Messages
            </button>

            <button
              className="btn btn-danger px-4"
              onClick={handleLogout}
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

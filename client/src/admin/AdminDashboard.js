import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Admin Dashboard</h2>
        <p className="text-muted">Welcome! Manage wallpapers from here.</p>
        <hr className="w-25 mx-auto" />
      </div>

      <div className="row justify-content-center g-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100 text-center">
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3">Add Wallpaper</h5>
              <p className="card-text text-muted">Upload new wallpapers with details and images.</p>
              <Link to="/admin/add-wallpaper" className="btn btn-primary w-100">Go</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100 text-center">
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-3">Manage Wallpapers</h5>
              <p className="card-text text-muted">Edit or delete existing wallpapers from the list.</p>
              <Link to="/admin/wallpapers" className="btn btn-dark w-100">Go</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

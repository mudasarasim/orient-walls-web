import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container my-5">
      <h2>Admin Dashboard</h2>
      <hr />
      <div className="d-flex gap-3">
        <Link to="/admin/add-wallpaper" className="btn btn-primary">Add Wallpaper</Link>
        <Link to="/admin/wallpapers" className="btn btn-secondary">Manage Wallpapers</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;

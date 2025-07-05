import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', {
        username,
        password,
      });

      if (res.data.success) {
        localStorage.setItem('admin_user', JSON.stringify(res.data.user));
        navigate('/admin/dashboard');
      } else {
        alert('❌ Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('❌ Login failed');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: '#f4f4f4' }}>
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%', borderRadius: '16px' }}>
        <h3 className="text-center mb-4">Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-dark w-100 mt-2 mb-4" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

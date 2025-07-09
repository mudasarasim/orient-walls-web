import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddWallpaper = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category_id: '',
    image: null,
  });

  // Fetch categories for dropdown
  useEffect(() => {
    axios.get('https://orient-walls-backend-production.up.railway.app/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) return alert('Please select an image.');

    const data = new FormData();
    data.append('title', formData.title);
    data.append('price', formData.price);
    data.append('category_id', formData.category_id);
    data.append('image', formData.image);

    try {
      await axios.post('https://orient-walls-backend-production.up.railway.app/api/wallpapers', data);
      alert('Wallpaper added successfully!');
      setFormData({ title: '', price: '', category_id: '', image: null });
    } catch (error) {
      console.error('Error uploading wallpaper:', error);
      alert('Upload failed');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Add New Wallpaper</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input type="text" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Category:</label>
          <select name="category_id" className="form-control" value={formData.category_id} onChange={handleChange} required>
            <option value="">-- Select Category --</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input type="file" className="form-control" onChange={handleFileChange} required />
        </div>

        <button type="submit" className="btn btn-primary">Add Wallpaper</button>
      </form>
    </div>
  );
};

export default AddWallpaper;

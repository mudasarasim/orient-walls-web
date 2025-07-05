import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddWallpaper = () => {
  const [form, setForm] = useState({ title: '', price: '', category_id: '' });
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch categories
  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  // Input handlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.price || !form.category_id || !image) {
      return alert("⚠️ All fields are required!");
    }

    const data = new FormData();
    data.append('title', form.title);
    data.append('price', form.price);
    data.append('category_id', form.category_id);
    data.append('image', image);

    try {
      setIsSubmitting(true);
      await axios.post('http://localhost:5000/api/wallpapers', data);
      alert('✅ Wallpaper added successfully');

      // Reset form
      setForm({ title: '', price: '', category_id: '' });
      setImage(null);
      document.getElementById('image-input').value = '';
    } catch (err) {
      alert('❌ Error uploading wallpaper');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container my-5">
      <h2>Add New Wallpaper</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label>Title</label>
          <input
            name="title"
            className="form-control"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            name="price"
            className="form-control"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Category</label>
          <select
            name="category_id"
            className="form-control"
            value={form.category_id}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Image</label>
          <input
            id="image-input"
            type="file"
            className="form-control"
            onChange={handleImage}
            required
          />
        </div>
        <button className="btn btn-success" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
};

export default AddWallpaper;

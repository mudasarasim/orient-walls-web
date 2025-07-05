import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddWallpaper = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category_id: '',
    image: null,
    image2: null,
    image3: null,
    image4: null,
  });

  // Fetch categories
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, price, category_id, image } = formData;
    if (!title || !price || !category_id || !image) {
      return alert('Please fill all required fields and upload the main image.');
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('price', formData.price);
    data.append('category_id', formData.category_id);
    data.append('image', formData.image);
    if (formData.image2) data.append('image2', formData.image2);
    if (formData.image3) data.append('image3', formData.image3);
    if (formData.image4) data.append('image4', formData.image4);

    try {
      await axios.post('http://localhost:5000/api/wallpapers', data);
      alert('Wallpaper added successfully!');
      setFormData({
        title: '',
        price: '',
        category_id: '',
        image: null,
        image2: null,
        image3: null,
        image4: null,
      });
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to add wallpaper.');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Add New Wallpaper</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category:</label>
          <select
            name="category_id"
            className="form-control"
            value={formData.category_id}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Category --</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        {/* Image Inputs */}
        <div className="mb-3">
          <label className="form-label">Main Image (required):</label>
          <input
            type="file"
            name="image"
            className="form-control"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image 2 (optional):</label>
          <input
            type="file"
            name="image2"
            className="form-control"
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image 3 (optional):</label>
          <input
            type="file"
            name="image3"
            className="form-control"
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image 4 (optional):</label>
          <input
            type="file"
            name="image4"
            className="form-control"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn btn-success mb-5">Upload</button>

      </form>
    </div>
  );
};

export default AddWallpaper;

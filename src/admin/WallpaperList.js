import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WallpaperList = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    price: '',
    category_id: '',
    image: null, // image file
  });
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await axios.get('http://localhost:5000/api/categories');
    setCategories(res.data);
  };

  const fetchWallpapers = async () => {
    const res = await axios.get('http://localhost:5000/api/wallpapers');
    setWallpapers(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this wallpaper?')) {
      await axios.delete(`http://localhost:5000/api/wallpapers/${id}`);
      fetchWallpapers();
    }
  };

  const handleEdit = (wp) => {
    setEditId(wp.id);
    setEditForm({
      title: wp.title,
      price: wp.price,
      category_id: wp.category_id,
      image: null, // start with no change
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', editForm.title);
    formData.append('price', editForm.price);
    formData.append('category_id', editForm.category_id);

    if (editForm.image) {
      formData.append('image', editForm.image);
    }

    try {
      await axios.put(
        `http://localhost:5000/api/wallpapers/${editId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert('Wallpaper updated');
      setEditId(null);
      fetchWallpapers();
    } catch (err) {
      console.error('Error updating wallpaper:', err);
      alert('Failed to update wallpaper');
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setEditForm({ ...editForm, image: e.target.files[0] });
    } else {
      setEditForm({ ...editForm, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    fetchWallpapers();
    fetchCategories();
  }, []);

  return (
    <div className="container my-5">
      <h2>All Wallpapers</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {wallpapers.map((wp) => (
            <tr key={wp.id}>
              <td>
                <img
                  src={`http://localhost:5000/uploads/${wp.image}`}
                  alt=""
                  width="80"
                />
                {editId === wp.id && (
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="form-control mt-1"
                  />
                )}
              </td>
              <td>
                {editId === wp.id ? (
                  <input
                    name="title"
                    value={editForm.title}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  wp.title
                )}
              </td>
              <td>
                {editId === wp.id ? (
                  <input
                    name="price"
                    value={editForm.price}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  wp.price
                )}
              </td>
              <td>
                {editId === wp.id ? (
                  <select
                    name="category_id"
                    value={editForm.category_id}
                    onChange={handleChange}
                    className="form-control"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  wp.category
                )}
              </td>
              <td>
                {editId === wp.id ? (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={handleUpdate}
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(wp)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(wp.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WallpaperList;

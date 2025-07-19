import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from "../config"; // import base url

const WallpaperList = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    price: '',
    category_id: '',
    image: null,
    image2: null,
    image3: null,
    image4: null,
  });
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await axios.get(`${BASE_URL}/api/categories`);
    setCategories(res.data);
  };

  const fetchWallpapers = async () => {
    const res = await axios.get(`${BASE_URL}/api/wallpapers`);
    setWallpapers(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this wallpaper?')) {
      await axios.delete(`${BASE_URL}/api/wallpapers/${id}`);
      fetchWallpapers();
    }
  };

  const handleEdit = (wp) => {
    setEditId(wp.id);
    setEditForm({
      title: wp.title,
      price: wp.price,
      category_id: wp.category_id,
      image: null,
      image2: null,
      image3: null,
      image4: null,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', editForm.title);
    formData.append('price', editForm.price);
    formData.append('category_id', editForm.category_id);

    if (editForm.image) formData.append('image', editForm.image);
    if (editForm.image2) formData.append('image2', editForm.image2);
    if (editForm.image3) formData.append('image3', editForm.image3);
    if (editForm.image4) formData.append('image4', editForm.image4);

    try {
      await axios.put(
        `${BASE_URL}/api/wallpapers/${editId}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
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
    const { name, value, files } = e.target;
    if (files) {
      setEditForm({ ...editForm, [name]: files[0] });
    } else {
      setEditForm({ ...editForm, [name]: value });
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
            <th>Images</th>
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
                {[wp.image, wp.image2, wp.image3, wp.image4].map(
                  (img, idx) =>
                    img && (
                      <img
                        key={idx}
                        src={`https://orient-walls-backend-production.up.railway.app/uploads/${img}`}
                        alt=""
                        width="60"
                        className="me-1 mb-1"
                      />
                    )
                )}
                {editId === wp.id && (
                  <div className="mt-2">
                    <input
                      type="file"
                      name="image"
                      onChange={handleChange}
                      className="form-control mb-1"
                    />
                    <input
                      type="file"
                      name="image2"
                      onChange={handleChange}
                      className="form-control mb-1"
                    />
                    <input
                      type="file"
                      name="image3"
                      onChange={handleChange}
                      className="form-control mb-1"
                    />
                    <input
                      type="file"
                      name="image4"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
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
                  <button className="btn btn-primary btn-sm" onClick={handleUpdate}>
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

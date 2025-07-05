const db = require('../config/db');

// Get all wallpapers with category name
exports.getWallpapers = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT w.*, c.name as category 
      FROM wallpapers w 
      LEFT JOIN categories c ON w.category_id = c.id
    `);
    res.json(rows);
  } catch (err) {
    console.error('Error fetching wallpapers:', err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Add new wallpaper
exports.addWallpaper = async (req, res) => {
  const { title, price, category_id } = req.body;
  const image = req.file?.filename;

  if (!title || !price || !category_id || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await db.query(
      'INSERT INTO wallpapers (title, image, price, category_id) VALUES (?, ?, ?, ?)',
      [title, image, price, category_id]
    );
    res.json({ success: true, message: 'Wallpaper added' });
  } catch (err) {
    console.error('Error adding wallpaper:', err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Delete wallpaper
exports.deleteWallpaper = async (req, res) => {
  const { id } = req.params;

  try {
    await db.query('DELETE FROM wallpapers WHERE id = ?', [id]);
    res.json({ success: true, message: 'Wallpaper deleted' });
  } catch (err) {
    console.error('Error deleting wallpaper:', err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Update wallpaper with optional image
exports.updateWallpaper = async (req, res) => {
  const { title, price, category_id } = req.body;
  const { id } = req.params;
  const image = req.file?.filename;

  try {
    let query, values;

    if (image) {
      query = `
        UPDATE wallpapers
        SET title = ?, price = ?, category_id = ?, image = ?
        WHERE id = ?
      `;
      values = [title, price, category_id, image, id];
    } else {
      query = `
        UPDATE wallpapers
        SET title = ?, price = ?, category_id = ?
        WHERE id = ?
      `;
      values = [title, price, category_id, id];
    }

    await db.query(query, values);
    res.json({ success: true, message: 'Wallpaper updated successfully' });
  } catch (err) {
    console.error('Error updating wallpaper:', err);
    res.status(500).json({ error: 'Database error during update' });
  }
};

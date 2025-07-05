const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const {
  getWallpapers,
  addWallpaper,
  deleteWallpaper,
  updateWallpaper
} = require('../controllers/wallpapersController');

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// GET all wallpapers
router.get('/', getWallpapers);

// POST new wallpaper
router.post('/', upload.single('image'), addWallpaper);

// DELETE wallpaper
router.delete('/:id', deleteWallpaper);

// PUT (update) wallpaper
router.put('/:id', upload.single('image'), updateWallpaper);

module.exports = router;

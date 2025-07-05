const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const contactRoutes = require('./routes/contact');
const adminAuthRoutes = require('./routes/adminAuth');

// Routes
app.use('/api/categories', require('./routes/categories'));
app.use('/api/wallpapers', require('./routes/wallpapers'));
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminAuthRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

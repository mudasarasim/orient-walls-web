const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const path = require('path');

// Middlewares
app.use(cors());
app.use(express.json());

// Serve React build static files
const buildPath = path.join(__dirname, "../client/build");
app.use(express.static(buildPath));

// Serve uploads if needed
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const contactRoutes = require('./routes/contact');
const adminAuthRoutes = require('./routes/adminAuth');

app.use('/api/categories', require('./routes/categories'));
app.use('/api/wallpapers', require('./routes/wallpapers'));
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminAuthRoutes);

// React SPA fallback
app.get('/*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Use dynamic port (required on Namecheap)
// Setup server
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


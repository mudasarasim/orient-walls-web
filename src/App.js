import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Kids from "./pages/Kids";
import Residential from "./pages/Residential";
import Wallpaper from "./pages/Wallpaper";
import Office from "./pages/Office";
import ProductDetail from "./pages/ProductDetail";
import AddWallpaper from './admin/AddWallpaper';
import WallpaperList from "./admin/WallpaperList";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import AdminMessages from './pages/AdminMessages';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/wallpaper" element={<Wallpaper />} />
        <Route path="/collections/office" element={<Office />} />
        <Route path="/collections/residential" element={<Residential />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/admin/add-wallpaper" element={<AddWallpaper />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/wallpapers" element={<WallpaperList />} />
        <Route path="/admin/AdminLogin" element={<AdminLogin />} />
        <Route path="/admin/messages" element={<AdminMessages />} />


        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />



      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

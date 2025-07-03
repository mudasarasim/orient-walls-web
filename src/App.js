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
           
           
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

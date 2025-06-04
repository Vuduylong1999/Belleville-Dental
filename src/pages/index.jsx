import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs.jsx';
import ContactUs from './ContactUs.jsx';
import DentalHomePage from './Home.jsx';
import Products from './Products.jsx';
import BlogEducation from './BlogEducation.jsx';
import PatientEdu from './PatientEdu.jsx';
import BlogSingle from '../components/edu/BlogSingle.jsx';
import BlogResearchs from './BlogResearchs.jsx';
import ProductDetail from './ProductDetail.jsx';
import Gallery from './Gallery.jsx';

function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default function AppRouter() {
  return (
    <Routes>
      {/* Home Routes */}
      <Route path="/" element={<DentalHomePage />} />
      <Route path="/home" element={<DentalHomePage />} />
      
      {/* Education Routes */}
      <Route path="/education">
        <Route path="patient">
          <Route index element={<PatientEdu />} />
          <Route path=":id" element={<BlogSingle />} />
        </Route>
        <Route path="professional">
          <Route index element={<BlogEducation />} />
          <Route path=":id" element={<BlogSingle />} />
        </Route>
        <Route path="researchs">
          <Route index element={<BlogResearchs />} />
          <Route path=":id" element={<BlogSingle />} />
        </Route>
      </Route>

      {/* Product Routes */}
      <Route path="/products">
        <Route index element={<Products />} />
        <Route path=":id" element={<ProductDetail />} />
      </Route>

      {/* Other Routes */}
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

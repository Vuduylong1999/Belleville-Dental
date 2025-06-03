import React from 'react';
// config-route B2: Sử dụng Routes và Route để gán các path tương ứng 
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
    <>
      <Routes>

        <Route path='/' element={<DentalHomePage></DentalHomePage>} ></Route>
        <Route path='/home' element={<DentalHomePage></DentalHomePage>} ></Route>          
        <Route path='/education/patient' element={<PatientEdu />} />
        <Route path='/education/patient/:id' element={<BlogSingle />} />
        <Route path='/education/professional' element={<BlogEducation />} />
        <Route path='/education/professional/:id' element={<BlogSingle />} />
        <Route path='/education/researchs' element={<BlogResearchs />} />
        <Route path='/education/researchs/:id' element={<BlogSingle />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </>
  )
}

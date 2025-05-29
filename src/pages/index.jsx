import React from 'react';
// config-route B2: Sử dụng Routes và Route để gán các path tương ứng 
import { Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs.jsx';
import ContactUs from './ContactUs.jsx';
import DetailProduct from './DetailProduct.jsx';
import Blog from './Blog.jsx';
import DentalHomePage from './Home.jsx';
import Products from './Products.jsx';
import BlogEducation from './BlogEducation.jsx';
import PatientEdu from './PatientEdu.jsx';
import BlogSingle from '../components/edu/BlogSingle.jsx';

function NotFound() {
  return <h1 className='text-center font-bold'> 404 - Not Found </h1>
}

export default function AppRouter() {
  return (
    <>
      <Routes>

        <Route path='/' element={<DentalHomePage></DentalHomePage>} ></Route>
        <Route path='/home' element={<DentalHomePage></DentalHomePage>} ></Route>
        <Route path='/education/patient' element={<PatientEdu />} ></Route>
        <Route path='/education/professional' element={<BlogEducation />} ></Route>
        <Route path='/education/researchs' element={<BlogSingle />} ></Route>
        <Route path='/products' element={<Products></Products>} ></Route>
        <Route path='/about-us' element={<AboutUs></AboutUs>} ></Route>
        <Route path='/contact-us' element={<ContactUs></ContactUs>} ></Route>
        <Route path='/details' element={<DetailProduct></DetailProduct>} ></Route>
        <Route path='/blogs' element={<Blog></Blog>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>

      </Routes>
    </>
  )
}

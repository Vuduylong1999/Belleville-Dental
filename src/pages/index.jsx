import React from 'react';
// config-route B2: Sử dụng Routes và Route để gán các path tương ứng 
import {Routes, Route} from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import DetailProduct from './DetailProduct';
// <<<<<<< HEAD
import Blog from './blog';
// =======
import DentalHomePage from './Home';
// >>>>>>> 3062eff1d59323062f7583cc784130a2cc318ce1

function NotFound (){
    return <h1 className='text-center font-bold'> 404 - Not Found </h1>
}

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DentalHomePage></DentalHomePage>} ></Route>
        <Route path='/about-us' element={<AboutUs></AboutUs>} ></Route>
        <Route path='/contact-us' element={<ContactUs></ContactUs>} ></Route>
        <Route path='/details' element={<DetailProduct></DetailProduct>} ></Route>
        <Route path='/blog'  element={<Blog></Blog>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>

      </Routes>
    </>
  )
}

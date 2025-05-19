import React from 'react';
// config-route B2: Sử dụng Routes và Route để gán các path tương ứng 
import {Routes, Route} from 'react-router-dom';
import AboutUs from './AboutUs';

function NotFound (){
    return <h1 className='text-center font-bold'> 404 - Not Found </h1>
}

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path='/about-us' element={<AboutUs></AboutUs>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
    </>
  )
}

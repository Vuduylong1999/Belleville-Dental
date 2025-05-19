import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AppRouter from './pages'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
      <div className="container-fluid">
        <div className='container'>
          <Header />
          {/*  Main content */}
          <AppRouter/>
          <Footer />

        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
      <div className="container-fluid">
        <div className='container'>
          <Header />
          {/*  Main content */}
          <Footer />

        </div>
      </div>
    </>
  )
}

export default App

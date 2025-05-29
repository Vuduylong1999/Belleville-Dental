import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AppRouter from './pages'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Header />
      <main className="main-content">
        <AppRouter />
      </main>
      <Footer />



    </>
  )
}

export default App

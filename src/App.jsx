import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Login from "./pages/login/Login"
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import Register from './pages/register/Register';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>

        <Footer />

      </BrowserRouter>

    </div>
  )
}

export default App;
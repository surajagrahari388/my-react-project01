import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Navbar from './navbar/Navbar';
import Footer from './Footer/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
     <Footer/>
    </div>
  )
}

export default App

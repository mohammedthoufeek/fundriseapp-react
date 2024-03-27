import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import '../App.css'
export default function Base({children}) {
  return (
    <div>
    <div className="app-container">
    <Navbar/>
    {children}
    </div>
    <div>
    <Footer className="footer"/>
    </div>
    </div>
  )
}

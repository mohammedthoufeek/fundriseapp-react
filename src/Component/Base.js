import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'

export default function Base({children}) {
  return (
    <div>
    <Navbar/>
    {children}
    <Footer/>
    </div>
 
  )
}

import React from 'react'
import Header from './components.jsx/Header/Header'
import Footer from './components.jsx/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
     <Header/>
        <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout

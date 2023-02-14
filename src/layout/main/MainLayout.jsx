import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../component/nav/Nav'
import Footer from '../../page/footer/Footer'

function MainLayout() {
  return (
    <div>
      <Nav />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout

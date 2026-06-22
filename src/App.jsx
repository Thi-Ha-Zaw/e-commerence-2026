import React from 'react'
import Footer from './layouts/Footer'
import HomeBody from './layouts/HomeBody'
import Header from './layouts/Header'
import CategoryLayout from './layouts/CategoryLayout'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div className=' flex flex-col h-screen px-20'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import Footer from './layouts/Footer'
import HomeBody from './layouts/HomeBody'
import Header from './layouts/Header'
import CategoryLayout from './layouts/CategoryLayout'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div className=' flex flex-col h-screen px-5 md:px-10 lg:px-20 gap-5 '>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
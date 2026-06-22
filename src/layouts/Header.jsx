import React from 'react'
import CartBtn from '../components/CartBtn'

const Header = () => {
  return (
    <header className=' flex justify-between mt-5 pb-2 items-end'>
        <h1 className='text-2xl font-bold'>Online Shop</h1>
        <CartBtn />
    </header>
  )
}

export default Header
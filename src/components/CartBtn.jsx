import React from 'react'
import { useNavigate } from 'react-router'
import useCartStore from '../store/useCartStore';

const CartBtn = () => {

  const nav = useNavigate();

  const {carts} = useCartStore();
  return (
    <button onClick={()=>nav("/cart")} className=' cursor-pointer relative border shadow border-gray-50 py-2 px-4 rounded'>Cart <span className='absolute -top-2 -right-2 bg-indigo-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>{carts.length}</span></button>
  )
}

export default CartBtn
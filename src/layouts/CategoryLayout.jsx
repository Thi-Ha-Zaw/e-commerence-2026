import React from 'react'
import Category from '../components/Category'

const CategoryLayout = () => {
const categories = [
    { name: "all", current: true },
    { name: "electronics", current: false },
    { name: "jewellery", current: false },
    { name: "men's clothings", current: false },
    { name: "women's clothings", current: false }
];
  return (
    <div className=' mt-8'>
        <h4 className=' text-lg mb-3'>Product Categories</h4>
        <div className=' flex gap-3'>
            {
                categories.map((category,id) => <Category key={id} category={category} />)
            }
        </div>
    </div>
  )
}

export default CategoryLayout
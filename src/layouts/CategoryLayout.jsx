import React from 'react'
import Category from '../components/Category'

import useCategoryStore from '../store/useCategoryStore'

const CategoryLayout = () => {
    const {categories} = useCategoryStore();
  return (
    <div className=' mt-8'>
        <h4 className=' text-lg mb-3'>Product Categories</h4>
        <div className=' flex gap-3 flex-wrap justify-center md:justify-start'>
            {
                categories.map((category) => <Category key={category.id} category={category} />)
            }
        </div>
    </div>
  )
}

export default CategoryLayout
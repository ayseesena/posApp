import React from 'react'
import Header from '../Components/header/Header'
import Edit from '../Components/product/Edit'

const ProductPage = () => {
  return (
  <>
  <Header/>
  <div className='px-6'>
    <h1 className='text-4xl font-bold text-center'>Ürünler</h1>
    <Edit/>
  </div>
  </>
  )
}

export default ProductPage
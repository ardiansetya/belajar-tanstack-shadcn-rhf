"use client"

import { useProducts } from '@/hooks/useProducts';
import React from 'react'

const ProductsPage = () => {
  const { data:productsData, isLoading, isError } = useProducts();
  console.log(productsData);
  return (
    <section>ProductsPage</section>
  )
}

export default ProductsPage
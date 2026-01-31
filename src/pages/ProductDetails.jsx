import { Card } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductsById } from '../services/api'
import { useQuery } from '@tanstack/react-query'

const ProductDetails = () => {
  const { id } = useParams()

  const {data: product,isLoading}=useQuery({
    queryKey:["product",id],
    queryFn:()=>fetchProductsById(id).then(res=>res.data),
     refetchOnWindowFocus: false,
  });
  if (isLoading) return "Loading........";

  return (
    <Card className="p-6">
      <img src={product.image} className="h-60 mx-auto" /><br />
      <h1 className="text-xl font-bold">{product.title}</h1><br />
      <p className='text-justify w-9xl'>{product.description}</p><br/>
      <p>Price: ${product.price}</p><br/>
      <p>Category: {product.category}</p><br/>
      <p>Rating: {product.rating.rate}</p><br/>
      <p>Count: {product.rating.count}</p>
    </Card>
  )
}

export default ProductDetails

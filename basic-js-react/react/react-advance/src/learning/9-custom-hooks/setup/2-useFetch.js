import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
  
    const getProducts = async () => {
      const response = await fetch(url)
      const products = await response.json()
      setProducts(products)
      setLoading(false)
    }

    useEffect(() => {
        getProducts()}, [url]);

    return {loading, products}
};

//we just move fetch part of the component to seperate module to make this fetching part reusable
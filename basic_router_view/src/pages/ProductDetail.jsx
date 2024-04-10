import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const {pid} = useParams();
  const [product, setProduct] = useState({});

  useEffect(()=>{
    fetch('http://localhost:3000/data/products.json')
        .then(res => res.json())
        .then(result => {
          const foundProduct = result.find(item => item.pid === pid);
          setProduct(foundProduct);
        })
        .catch(error => console.log(error))
  }, []);

  // console.log(product);

    return (
      <div>
        <h2>   Product Detail</h2>
        <div>
          <img src={product.image} />
          <span>{product.title}</span>
        </div>
        <Link to="/all">
          <span>◀ All Products</span>
        </Link>
      </div>
    );
}
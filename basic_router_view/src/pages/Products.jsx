import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Products() {
  const [productList, setProductList] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:3000/data/products.json')
        .then(res => res.json())
        .then(result => setProductList(result))
        .catch(error => console.log(error))
  }, []);

    return (
      <div>
        <h2>Product List</h2>
        <ul className="product-list">
          {productList.map(product => (
            <li key={product.pid}>
              <Link to={`/detail/${product.pid}`}>
                <img className="product-img" src={product.image} alt={product.title} />
              </Link>
              {/* <img className="product-img" src={product.image} alt={product.title} /> */}
              
              <p>{product.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}
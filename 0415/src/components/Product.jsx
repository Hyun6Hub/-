import React, { useState, useEffect }  from 'react';
import ProductAvata from './ProductAvata';
import { Link } from 'react-router-dom';

export default function Product() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/product.json')
      .then(res => res.json())
      .then(result => setProductList(result))
      .catch(error => console.log(error))
  }, []);

  //출력리스트 갯수 설정
  const rows = [];  
  for(let i=0; i < productList.length; i+=4){ // [{0},{1},{2},{3}]  {4}
      rows.push(productList.slice(i, i+4));  // [{0},{1},{2},{3}]
  }
  /**
   * rows[][]
   * [0] -> [{0},{1},{2},{3}]
   * [1] -> [{4},{5},{6}]
   */

    return (
      <div>
        {rows.map((rowArray, index) => (
          <div key={index} className='product-list'>
            {rowArray.map(product => (
              <Link to={`/products/${product.id}`}>
                <ProductAvata image={product.image}/>
              </Link>
            ))}
          </div>
        ))}
      </div>
    );
}


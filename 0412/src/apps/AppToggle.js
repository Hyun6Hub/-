import React, { useState } from 'react';
import Product from '../components/olive/ProductView.jsx';

export default function App() {
  const [showProduct, setShowProduct] = useState(false);
  const handleClick = () => setShowProduct(!showProduct); 

    return (
      <div>
        {/* <h1>Toggle 테스트</h1> */}
        <div>
          <input type='checkbox' onClick={handleClick}/> 올리브영의 모든 상품보기
        </div>
        <hr/>
        {showProduct && <Product />}
      </div>
    );
}
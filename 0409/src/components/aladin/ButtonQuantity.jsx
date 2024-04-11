import React from 'react';
import { useState } from 'react';

export default function ButtonQuantity() {
  const [number, setNumber] = useState(1);
  const down = () => {
    if(number > 1){ 
      setNumber(number - 1) 
    } else {
      alert('1개 이상 구매가능합니다.'); 
      setNumber(1);
    }
  }
  const up = () => {
    setNumber(number + 1);
  }

    return (
      <div className="quantity">
        <span className="quantity-button" onClick={down}>-</span>
        <span>{number}</span>
        <span className="quantity-button" onClick={up}>+</span>
      </div>
    );
}
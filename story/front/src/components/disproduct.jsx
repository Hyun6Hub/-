// src/components/Product.js
import React, { useState } from "react";

export default function disProduct({ originalPrice }) {
  const [isDiscounted, setIsDiscounted] = useState(false);

  const calculateDiscountedPrice = (price) => {
    return isDiscounted ? price * 0.8 : price;
  };

  const handleDiscountClick = () => {
    setIsDiscounted(!isDiscounted);
  };

  const displayPrice = calculateDiscountedPrice(originalPrice);

  return (
    <div>
      <h2>상품 가격: ${displayPrice.toFixed(2)}</h2>
      <button onClick={handleDiscountClick}>
        {isDiscounted ? "할인 해제" : "20% 할인 적용"}
      </button>
    </div>
  );
}

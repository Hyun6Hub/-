import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Product.css"; // CSS 파일을 import 합니다

export default function Product() {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    axios
      .get("/data/product.json")
      .then((res) => {
        console.log("Server response:", res.data);
        const data = res.data.map((product) => ({
          ...product,
          clickCount: 0,
          image: product.image.startsWith("http")
            ? product.image
            : `${process.env.PUBLIC_URL}${product.image}`,
        }));
        setProductList(data);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  const handleProductClick = (id) => {
    setProductList((prevList) =>
      prevList
        .map((product) =>
          product.id === id
            ? { ...product, clickCount: product.clickCount + 1 }
            : product
        )
        .sort((a, b) => b.clickCount - a.clickCount)
    );
    navigate(`/product/${id}`); // 클릭 시 해당 제품 상세 페이지로 이동
  };

  const getBadge = (index) => {
    switch (index) {
      case 0:
        return "🥇 1위";
      case 1:
        return "🥈 2위";
      case 2:
        return "🥉 3위";
      default:
        return null;
    }
  };

  return (
    <div className="product-grid">
      {productList.map((product, index) => (
        <div
          key={product.id}
          className="product-item"
          onClick={() => handleProductClick(product.id)}
        >
          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => {
                console.error(`Failed to load image for ${product.name}`);
                e.target.src = "/path/to/fallback/image.jpg";
              }}
            />
          )}
          <h3>{product.name}</h3>
          {index < 3 && <span className="badge">{getBadge(index)}</span>}
          <p>클릭: {product.clickCount}</p>
        </div>
      ))}
    </div>
  );
}

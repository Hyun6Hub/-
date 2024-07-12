import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailProduct({ addCartCount }) {
  /** GET : url을 통해 넘어오는 파라미터는 useParams hook!!  */
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("포장해가기");

  useEffect(() => {
    axios.get("/data/product.json").then((res) => {
      // const result = res.data;
      res.data.filter((product) => {
        if (product.id === id) setProduct(product);
      });
    });
  }, []);

  /**
   * addCartItem : 장바구니 추가
   */
  const addCartItem = (id) => {
    alert("장바구니에 담겼습니다.");
    const cid = Math.floor(100 + Math.random() * 900);
    addCartCount({ cid: cid, id: id, size: size, qty: 1 });
  };

  // console.log('size---> ', size);

  return (
    <div className="content">
      <div className="product-detail">
        <img src={product.image} />
        <ul>
          <li className="product-detail-title">{product.name}</li>
          <li className="product-detail-title">{product.price}</li>
          <li className="product-detail-subtitle">{product.info}</li>
          <li>
            <span className="product-detail-select1">배송위치 : </span>
            <select
              className="product-detail-select2"
              onChange={(e) => setSize(e.target.value)}
              defaultValue="포장해가기"
            >
              <option value="서울배송">서울배송</option>
              <option value="경남배송">경남배송</option>
              <option value="제주배송">제주배송</option>
              <option value="해외배송">해외배송</option>
              <option value="포장해가기">포장해가기</option>
            </select>
          </li>
          <li>
            <span className="product-detail-select1">할인 : </span>
            <select
              className="product-detail-select2"
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="지인할인 20%">지인할인 20%</option>
              <option value="가족할인 30%">가족할인 30%</option>
            </select>
          </li>
          <li>
            <button
              type="button"
              className="product-detail-button"
              onClick={() => addCartItem(product.id)}
            >
              구매 할게요!
            </button>
            <button
              type="button"
              className="product-detail-button1"
              onClick={() => addCartItem(product.id)}
            >
              고민 중이에요
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

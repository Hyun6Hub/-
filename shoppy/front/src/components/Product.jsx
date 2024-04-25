import React, { useState, useEffect } from "react";
import ProductAvata from "./ProductAvata";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Product() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/products/all").then((res) => {
      const data = res.data;
      setProductList(data);
    });

    // fetch('/data/product.json')   //1. url 접속
    //   .then(res => res.json())    //2. 문자열 데이터 반환 -> json 데이터 변환
    //   .then(result => setProductList(result))  //3. json 데이터 반환 -> 로직처리
    //   .catch(error => console.log(error))
  }, []);

  //출력리스트 갯수 설정
  const rows = [];
  for (let i = 0; i < productList.length; i += 3) {
    // [{0},{1},{2},{3}]  {4}
    rows.push(productList.slice(i, i + 3)); // [{0},{1},{2},{3}]
  }
  /**
   * rows[][]
   * [0] -> [{0},{1},{2},{3}]
   * [1] -> [{4},{5},{6}]
   */

  return (
    <div>
      {rows.map((rowArray, index) => (
        <div key={index} className="product-list">
          {rowArray.map((product) => (
            <Link to={`/products/${product.id}`}>
              <ProductAvata image={product.image} />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

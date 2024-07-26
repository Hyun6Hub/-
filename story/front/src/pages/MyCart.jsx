import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MyCart({ cartItems, removeCartItem }) {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // 총 가격을 위한 state 추가

  useEffect(() => {
    axios
      .get("/data/product.json")
      .then((res) => {
        const products = res.data;
        const updateCartItems = cartItems.map((item, index) => {
          const product = products.find((product) => product.id === item.id);
          if (product) {
            return {
              ...item,
              image: product.image,
              name: product.name,
              price: product.price,
              info: product.info,
            };
          }
          return item;
        });
        setCartList(updateCartItems);
      })
      .catch((error) => console.log(error));
  }, [cartItems]);

  useEffect(() => {
    // cartList가 변경될 때마다 총 가격 계산
    const total = cartList.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
    setTotalPrice(total);
  }, [cartList]);

  console.log("MyCart :: cartList==> ", cartList);

  return (
    <div>
      <h1>MyCart11</h1>
      <table>
        <thead>
          <tr>
            <th>카트아이디</th>
            <th>상품아이디</th>
            <th>이미지</th>
            <th>상품명</th>
            <th>상품정보</th>
            <th>사이즈</th>
            <th>가격</th>
            <th>수량</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((item) => (
            <tr key={item.cid}>
              <td>{item.cid}</td>
              <td>{item.id}</td>
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "50px" }}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.info}</td>
              <td>{item.size}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
              <td>
                <button onClick={() => removeCartItem(item.cid, item.qty)}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>총 가격: {totalPrice}원</h2>
      </div>
    </div>
  );
}

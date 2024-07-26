import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailProduct({ addCartCount }) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("포장해가기");
  const [discountRate, setDiscountRate] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [likes, setLikes] = useState(0);
  const [likedBy, setLikedBy] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    id: "user1",
    name: "현재 사용자",
  });

  useEffect(() => {
    axios.get("/data/product.json").then((res) => {
      const productData = res.data.find((product) => product.id === id);
      if (productData) {
        setProduct(productData);
        setDiscountedPrice(productData.price);
        setLikes(productData.likes || 0);
        setLikedBy(productData.likedBy || []);
      }
    });
  }, [id]);

  useEffect(() => {
    if (product.price) {
      const discounted = product.price * (1 - discountRate / 100);
      setDiscountedPrice(Math.round(discounted));
    }
  }, [product.price, discountRate]);

  const handleDiscountChange = (e) => {
    const selected = e.target.value;
    if (selected === "지인할인 20%") {
      setDiscountRate(20);
    } else if (selected === "가족할인 30%") {
      setDiscountRate(30);
    } else {
      setDiscountRate(0);
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const addCartItem = (id) => {
    alert("장바구니에 담겼습니다.");
    const cid = Math.floor(100 + Math.random() * 900);
    addCartCount({
      cid: cid,
      id: id,
      size: size,
      qty: quantity,
      price: discountedPrice * quantity,
    });
  };

  const handleLike = () => {
    if (likedBy.some((user) => user.id === currentUser.id)) {
      setLikes(likes - 1);
      setLikedBy(likedBy.filter((user) => user.id !== currentUser.id));
    } else {
      setLikes(likes + 1);
      setLikedBy([...likedBy, currentUser]);
    }
  };

  if (!product.id) return <div>Loading...</div>;

  return (
    <div className="content">
      <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <ul>
          <li className="product-detail-title">{product.name}</li>
          <li className="product-detail-title">
            원가: {product.price}원
            {discountRate > 0 && (
              <span style={{ color: "red" }}>
                {" "}
                → 할인가: {discountedPrice}원
              </span>
            )}
          </li>
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
              onChange={handleDiscountChange}
            >
              <option value="할인 없음">할인 없음</option>
              <option value="지인할인 20%">지인할인 20%</option>
              <option value="가족할인 30%">가족할인 30%</option>
            </select>
          </li>
          <li>
            <span className="product-detail-select1">수량 : </span>
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </li>
          <li>
            <span className="product-detail-select1">총 가격 : </span>
            <span>{discountedPrice * quantity}원</span>
          </li>
          <li>
            <button onClick={handleLike}>
              {likedBy.some((user) => user.id === currentUser.id)
                ? "좋아요 취소"
                : "좋아요"}
            </button>
            <span> 좋아요 수: {likes}</span>
          </li>
          <li>
            좋아요 누른 사람: {likedBy.map((user) => user.name).join(", ")}
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

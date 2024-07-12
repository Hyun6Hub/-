import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header({ cartCount }) {
  return (
    <div className="header-outer">
      <div className="header">
        <Link to="/" className="header-left">
          <FiShoppingBag />
          <span>황씨네 편의점</span>
        </Link>
        <nav className="header-right">
          <Link to="/products">제품</Link>
          <Link to="/carts">장바구니 ({cartCount})</Link>
          <Link to="/login">
            <button type="button">로그인</button>
          </Link>
          <Link to="/signup">
            <button type="button">회원가입</button>
          </Link>
          <Link to="/products/new">
            <BsFillPencilFill className="header-right-icon" />
          </Link>
        </nav>
      </div>
    </div>
  );
}

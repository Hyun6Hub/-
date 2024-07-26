import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header({ cartCount }) {
  return (
    <div className="header-container">
      <div className="header-outer">
        <div className="header">
          <Link to="/" className="header-left">
            <FiShoppingBag />
            <span>황씨네 편의점 24시</span>
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
        <div className="header-sub">
          <div className="sub-menu">
            <nav>
              <Link to="/food">식품</Link>
              <Link to="/drinks">음료</Link>
              <Link to="/snacks">과자</Link>
              <Link to="/daily">생활용품</Link>
              <Link to="/etc">문의하기</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

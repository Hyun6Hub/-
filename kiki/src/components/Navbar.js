import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className="navbar-logo">
          <img src="/path-to-your-logo.png" alt="그녀의 방" />
          <span>그녀의 방</span>
        </div>
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li>
            <a href="/">
              <span role="img" aria-label="heart">
                ❤️
              </span>
              <span role="img" aria-label="green heart">
                💚
              </span>{" "}
              즐겨 이벤트 30%{" "}
              <span role="img" aria-label="purple heart">
                💜
              </span>
            </a>
          </li>
          <li>
            <a href="/">
              <span role="img" aria-label="red heart">
                ❤️
              </span>{" "}
              [블랙데이] 사계절홀딱 10%{" "}
              <span role="img" aria-label="green heart">
                💚
              </span>
            </a>
          </li>
          <li>
            <a href="/">
              <span role="img" aria-label="red heart">
                ❤️
              </span>{" "}
              [블랙데이] 멀티커튼 10%{" "}
              <span role="img" aria-label="green heart">
                💚
              </span>
            </a>
          </li>
          <li>
            <a href="/">쉬폰 제주품</a>
          </li>
          <li>
            <a href="/">린넨커튼</a>
          </li>
          <li>
            <a href="/">커튼찾기팁</a>
          </li>
          <li>
            <a href="/">가성팀계</a>
          </li>
          <li>
            <a href="/">커뮤니티</a>
          </li>
        </ul>
        <div className="navbar-search">
          <button aria-label="Search">🔍</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

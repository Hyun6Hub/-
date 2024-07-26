// src/pages/Home.js
import React from "react";
import Product from "../components/Product";
import "./Home.css"; // CSS 파일을 불러옵니다.

export default function Home() {
  return (
    <>
      <div className="tname background">
        <h5>도움말과 지원</h5>
        <div className="input-container">
          <label htmlFor="user-input">&nbsp;&nbsp;</label>
          <label className="input-wrapper">
            <input
              type="text"
              id="user-input"
              className="input-box"
              placeholder="식품, 음료, 과자 검색하기"
            />
            <i className="fas fa-search input-icon"></i>
          </label>
        </div>
        <h2>무엇을 도와드릴까요?</h2>
        <h4>특정 문제에 대한 도움을 받으려면 고객센터를 방문하세요.</h4>
      </div>
      <div className="content background">
        <div className="banner"></div>
        <Product />
      </div>
    </>
  );
}

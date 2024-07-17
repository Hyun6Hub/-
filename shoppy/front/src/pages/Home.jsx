import React from "react";
import Product from "../components/Product";

export default function Home() {
  return (
    <div className="content">
      <div className="banner">
        <h3>제목</h3>
        <p>내용</p>
      </div>
      <Product />
    </div>
  );
}

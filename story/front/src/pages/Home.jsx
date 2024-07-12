import React from "react";
import Product from "../components/Product";

export default function Home() {
  return (
    <>
      <div className="tname">
        <h3>안녕하세요 !</h3>
        <p>사이트에 궁금한 점이 있다면 언제든 연락주세요.</p>
      </div>
      <div className="content">
        <div className="banner"></div>
        <Product />
      </div>
    </>
  );
}

import "../../css/Olive.css";
import { useState, useEffect } from "react";

/**
 * 상품메인 : Product
 */
export default function Product() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch("data/olive.json")
      .then((res) => res.json())
      .then((result) => setProductList(result))
      .catch((error) => console.log(error));
  }, []);

  //6개씩 출력하는 배열포맷 생성
  //productList를 6개씩 나누어 저장할 배열
  const rows = [];
  for (let i = 0; i < productList.length; i += 6) {
    rows.push(productList.slice(i, i + 6));
  }

  // for값 i는 반복할때마다 6개씩 증가
  // 배열을 6개씩 처리하기 위한 반복문

  // 한번 반복마다 6개씩
  // i포함, i+6미포함 잘라서 배열반환 값을 출력한다
  //6개씩 건너뛰면서 6개씩 추가

  /* 
  6,6 = 6칸 6칸
  6,5 = 5칸 5칸
  6,4 = 4칸 4칸
  6,3 = 3칸 3칸
  
6칸3줄하려면
json 18개를 만들어야함

6칸 1줄
json 6개

slice는 length 보다 초과하면 안된다
초과하면 배열의 길이까지만 잘라냄

*/

  return (
    <>
      {rows.map((row) => (
        <ul className="product-list">
          {/* 각 row 순회하며 ul요소 생성 */}
          {row.map((product) => (
            <li>
              {/* 각요소를 li로 나열 */}
              <div key={product.pid} className="product-info">
                <ProductImage img={product.image} />
                <ProductTitle title={product.title} />
                <ProductPrice
                  price={product.price}
                  sale_per={product.sale_per}
                />
              </div>
            </li>
          ))}
        </ul>
      ))}

      {/* {productList.map( (product) => (
        <div key={product.pid} className="product-info">
          <ProductImage img={product.image}/>
          <ProductTitle title={product.title}/>
          <ProductPrice 
                    price={product.price}
                    sale_per={product.sale_per}
                    />
        </div>
      ))} */}
    </>
  );
}

/**
 * 상품 가격 : ProductPrice
 */
export function ProductPrice({ price, sale_per }) {
  const price_org = price.toLocaleString();
  const price_cur = (price * sale_per).toLocaleString();
  //가격을 문자열로 변환
  return (
    <div className="product-price">
      <p className="product-price-org">{price_org}원</p>
      <p className="product-price-cur">
        {price_cur}
        <span style={{ fontSize: 14 }}>원</span>
      </p>
    </div>
  );
}

/**
 * 상품 타이틀 : ProductTitle
 */
export function ProductTitle({ title }) {
  return <p className="product-title">{title}</p>;
}

/**
 * 상품이미지 : ProductImage
 */
export function ProductImage({ img }) {
  return (
    <div className="product-image-box">
      <img className="product-image" src={img} />
      <span className="product-like">🤍</span>
    </div>
  );
}

import '../../css/Olive.css';
import { useState, useEffect } from 'react';

/**
 * 상품메인 : Product
 */
export default function Product() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch('data/olive.json')
      .then(res => res.json())
      .then(result => setProductList(result))
      .catch(error => console.log(error))
  }, []);

  //4개씩 출력하는 배열포맷 생성
  const rows = [];
  for(let i = 0; i < productList.length; i += 4){   
    rows.push(productList.slice(i, i+4));
  }
 
  return (
    <>
      {rows.map( row => (
        <ul className="product-list">
          {row.map( product => (
            <li>
              <div key={product.pid} className="product-info">
                <ProductImage img={product.image}/>
                <ProductTitle title={product.title}/>
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
export function ProductPrice({price, sale_per}) {
  const price_org = price.toLocaleString();
  const price_cur = (price * sale_per).toLocaleString();

  return (
    <div className="product-price">
      <p className="product-price-org">{price_org}원</p>
      <p className="product-price-cur">{price_cur}<span style={{fontSize:14}}>원</span></p>
    </div>
  );
}


/**
 * 상품 타이틀 : ProductTitle
 */
export function ProductTitle({title}) {
  return (
    <p className="product-title">{title}</p>
  );
}



/**
 * 상품이미지 : ProductImage
 */
export function ProductImage({img}) {
  return (
    <div className="product-image-box">
      <img className="product-image" src={img} />
      <span className="product-like">🤍</span>
    </div>
  );
}
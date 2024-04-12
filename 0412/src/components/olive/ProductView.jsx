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

  //전체 선택 처리 함수
  const handleAllChange = (checkFlag) => {
    //alert(checkFlag);
    //productList의 checked 값을 checkFlag값과 동일하게 변경
    const updateProductList = productList.map(product =>    
      ({...product, checked: checkFlag}) 
    );
    setProductList(updateProductList);
  }

  //상품별 체크박스 처리함수
  const handleChange = (pid) => {
    const updateProductList = productList.map(product => 
        product.pid === pid ? {...product,  checked: !product.checked} : product
    ); 

    setProductList(updateProductList);
  }

  //장바구니 담기
  const addCart = () => {
    //1. productList에서 checked = false인 item들을 필터링  ==> 체크된 객체들만 배열로 리턴
    //2. 필터링된 배열에서 map 함수를 실행하여 pid를 배열객체로 리턴
    const filterCheckedList = productList.filter(product => product.checked === true);
    const pidList = filterCheckedList.map(product => product.pid);
    // alert(pidList);
  }
 
  return (
    <>
      <input type="checkbox" 
             onChange={(e) => handleAllChange(e.target.checked)}/> 전체 선택
      &nbsp;&nbsp; 
      <button type="button" onClick={addCart}>장바구니 담기</button>
      {rows.map( row => (
        <ul className="product-list">
          {row.map( product => (
            <li>
              <div key={product.pid} className="product-info">
              <input type="checkbox" 
                      checked={product.checked} 
                      onChange={()=>handleChange(product.pid)}/>
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
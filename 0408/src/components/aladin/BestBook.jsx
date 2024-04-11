import Button from './Button.jsx';
import '../../css/aladin/AladinBestBook.css';
import { useState, useEffect } from 'react';
import ButtonQuantity from './ButtonQuantity.jsx';

export default function BestBook({bestBookList}) {
  // const [bestBookList, setBestBookList] = useState([]); 
  // useEffect(()=>{
  //   fetch('data/best_book.json')
  //     .then(res => res.json())
  //     .then(result => setBestBookList(result))
  //     .catch(error => console.log(error))
  // }, []);

  //!! props를 통해 넘어오는 객체는 반드시 객체의 존재여부를 체크해야함!!
  const title = bestBookList ? bestBookList.title : '';
  const list = bestBookList && bestBookList.list ? bestBookList.list : [];


  return (
    <>
      {/* <h3>{title}</h3> */}
      <ul className="best-book-list">
        {list.map((bestBook) => (
          <li className="best-book-list-content" key={bestBook.id}>
            <BestBookImageAvata image={bestBook.image}/>
            <BestBookInfo info={bestBook.info} />
            <BestBookBuy />
          </li>
        ))}
      </ul>
    </>
  );
}

export function BestBookImageAvata({image}) {
  return (
    <div className="best-book-image-avata">
      <img
        className ="best-book-image" 
        src= {image} />
      <div className="best-book-image-option">
        <p>새창열기</p>
        <p>크게보기</p>
      </div>
    </div>
  );
} 

export function BestBookInfo({info}) {
  const price_org = info.price.toLocaleString();
  const price_cur = (Math.trunc(info.price*info.sale_per)).toLocaleString();
  const point_cur = info.point.toLocaleString();
  const sales_point_cur = info.sales_point.toLocaleString();

  return (
    <div className="best-book-info">
      <div className="best-book-info-title">
        <p>[{info.kind}]</p>
        <p className="best-book-info-title-name">{info.title}</p>
      </div>
      <div className="best-book-info-pub">
        <p><span  className="best-book-info-pub-author">{info.author}</span> 
            (지은이)</p>
        <p className="best-book-info-pub-publisher">{info.publisher}</p>
        <p>{info.pdate}</p>
      </div>
      <div className="best-book-info-price">
        <p>{price_org}원 <span>➡ </span> 
          <span className="best-book-info-price-cur info-color">{price_cur}원</span>
          (<span className="info-color">10%</span>할인),
          마일리지 <span className="info-color">{point_cur}</span>원
          (<span className="info-color">5%</span>적립)
        </p>
      </div>
      <div className="best-book-info-sales">
        <p className="best-book-info-sales-review">💚💚💚💚💚({info.review_count})</p>
        <p>세일즈포인트 : 
          <span className="best-book-info-sales-point">{sales_point_cur}</span></p>
      </div>
      <p className="info-color">
        <Button text="양탄자배송" className="quick-delivery" />
         내일 아침 7시 출근전 배송</p>
      <p>(중구 서소문로 89-31) 지역변경</p>
    </div>
  );
}



export function BestBookBuy() {
  return (
    <div className="best-book-buy">
      <ButtonQuantity />
      <Button text="장바구니" className="button-cart" />
      <Button text="바로구매" className="button-buy"/>
      <Button text="보관함 🔽" className="button-list"/>
    </div>
  );
}
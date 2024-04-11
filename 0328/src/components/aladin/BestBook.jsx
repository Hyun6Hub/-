import Button from './Button.jsx';
import '../../css/aladin/AladinBestBook.css';

export default function BestBook() {

  return (
    <>
      <ul className="best-book-list">
        <li className="best-book-list-content">
          <BestBookImageAvata />
          <BestBookInfo />
          <BestBookBuy />
        </li>
      </ul>
    </>
  );
}

export function BestBookImageAvata() {
  return (
    <div className="best-book-image-avata">
      <img
        className ="best-book-image" 
        src="https://image.aladin.co.kr/product/33584/88/cover200/k962939592_1.jpg" />
      <div className="best-book-image-option">
        <p>새창열기</p>
        <p>크게보기</p>
      </div>
    </div>
  );
} 

export function BestBookInfo() {
  return (
    <div className="best-book-info">
      <div className="best-book-info-title">
        <p>[국내도서]</p>
        <p className="best-book-info-title-name">로봇 드림</p>
      </div>
      <div className="best-book-info-pub">
        <p><span  className="best-book-info-pub-author">사라 바론</span> 
            (지은이)</p>
        <p className="best-book-info-pub-publisher">놀</p>
        <p>2024년 3월</p>
      </div>
      <div className="best-book-info-price">
        <p>19,800원 <span>➡ </span> 
          <span className="best-book-info-price-cur info-color">17,820원</span>
          (<span className="info-color">10%</span>할인),
          마일리지 <span className="info-color">990</span>원
          (<span className="info-color">5%</span>적립)
        </p>
      </div>
      <div className="best-book-info-sales">
        <p className="best-book-info-sales-review">💚💚💚💚💚(134)</p>
        <p>세일즈포인트 : 
          <span className="best-book-info-sales-point">89,240</span></p>
      </div>
      <p className="info-color">
        <Button text="양탄자배송" className="quickDelivery" />
         내일 아침 7시 출근전 배송</p>
      <p>(중구 서소문로 89-31) 지역변경</p>
    </div>
  );
}


export function BestBookBuy() {
  return (
    <div>
      <Button text="장바구니" className="button-cart" />
      <Button text="바로구매" className="button-buy"/>
      <Button text="보관함" className="button-list"/>
    </div>
  );
}
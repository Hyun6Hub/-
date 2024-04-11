import '../../css/Aladin.css';
import { useState, useEffect } from 'react';

export default function Book() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch('data/book.json')
      .then(res => res.json())
      .then(result => setBookList(result))
      .catch(error => console.log(error))
  }, []);

  //출력리스트 갯수 정의
  const rows = [];
  for(let i=0; i < bookList.length; i += 3) { // 0,1,2,3,4,5,6,7,8
    rows.push(bookList.slice(i, i+3));
    /**
     * rows[0] = [{rank:1,...}, {rank:2,...},{rank:3,...},{rank4,...}] => ul
     * rows[1] = [{rank:5,...}, {rank:2,...},{rank:3,...},{rank4,...}] => ul
     * ...
     */
  }

  return (
    <>
      {rows.map((row, index) => (
        <ul className="book-list"  key={index}>
          {row.map((book) => (
            <li key={book.id} >
              <div className="book">
                <BookImage image={book.image} rank={book.rank}/>
                <BookInfo title={book.title} author={book.author} company={book.company}/>
                <BookPrice price={book.price}/>
              </div>
            </li>
          ))}
        </ul>
      ))}
    </>
  );
}

export function BookImage({image, rank}) {
  return (
    <div className="book-image-box">
      <img className="book-image" src={image} />
      <span className="book-rank-icon">{rank}</span>
    </div>
  );
}

export function BookInfo(props) {
  return (
    <div className="book-info">
      <p className="book-info-title">{props.title}</p>
      <p className="book-author-company">{props.author} 지음 | {props.company}</p>
    </div>
  );
}

export function BookPrice({price}) {
  const sprice = price.toLocaleString();
  const point = (Math.trunc(price * 0.095)).toLocaleString();

  return (
    <div>
      <p className="book-price">
        <span style={{fontWeight:'bold'}}>{sprice}</span>원 / {point}원</p>
    </div>
  );
}
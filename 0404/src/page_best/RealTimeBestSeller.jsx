import React, { useEffect, useState } from 'react';
import BestBook from '../components_best/BestBook.jsx';

export default function RealTimeBestSeller() {
  const [bookList, setBookList] = useState({});
  useEffect(() => {
    fetch('data/best_book_all.json')
      .then(res => res.json())
      .then(result => setBookList(result))
      .catch(error => console.log(error))
  } , []);

  // console.log(bookList.realTime);

    return (
      <div>
        <BestBook bestBookList={bookList.realTime}/>
      </div>
    );
}
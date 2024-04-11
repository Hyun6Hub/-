import React, { useState, useEffect } from 'react';
import BestBook from '../components_best/BestBook';

export default function SteadySeller() {
  const [bookList, setBookList] = useState({});
  useEffect(() => {
    fetch('data/best_book_all.json')
      .then(res => res.json())
      .then(result => setBookList(result))
      .catch(error => console.log(error))
  } , []);

    return (
      <div>
        <BestBook bestBookList={bookList.steady}/>
      </div>
    );
}
import React, { useEffect, useState } from 'react';
import BestBook from '../components_best/BestBook';

export default function BestSeller() {
  const [bookList, setBookList] = useState({});
  useEffect(() => {
    fetch('data/best_book_all.json')
      .then(res => res.json())
      .then(result => setBookList(result))
      .catch(error => console.log(error))
  } , []);

  // console.log(bookList.bestSeller);

    return (
      <div>
        <BestBook bestBookList={bookList.bestSeller}/>
      </div>
    );
}
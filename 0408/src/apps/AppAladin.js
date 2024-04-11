import BestBook from '../components/aladin/BestBook.jsx';
import '../css/aladin/AladinCommons.css';
import { useState, useEffect } from 'react';

export default function AppAladin() {

  const [bestBookListAll, setBestBookListAll] = useState([]); 
  useEffect(()=>{
    fetch('data/best_book_all.json')
      .then(res => res.json())
      .then(result => setBestBookListAll(result))
      .catch(error => console.log(error))
  }, []);


  return (
    <>
      <BestBook bestBookList={bestBookListAll.weeklyBest} />
      <BestBook bestBookList={bestBookListAll.salesBest} />
      <BestBook bestBookList={bestBookListAll.stedyBest} />
    </>
  );

}
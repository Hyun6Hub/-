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

  const allChange = (isChecked) => {
    const list = ['weeklyBest', 'salesBest', 'stedyBest'];

    const updatedList = list.reduce((acc, title) => {
      
      const updatedBooks = bestBookListAll[title].list.map(book =>
        ({ ...book, checked: isChecked })
      );

      return { ...acc, 
              [title]: { ...bestBookListAll[title], list: updatedBooks } 
            };
    }, {}); //reduce 
  
    setBestBookListAll(bestBookListAll => ({ ...bestBookListAll, ...updatedList }));
  };


  return (
    <>
      <input type="checkbox" 
             onChange={(e) => allChange(e.target.checked)} /> 전체 선택
      <BestBook bestBookList={bestBookListAll.weeklyBest} />
      <BestBook bestBookList={bestBookListAll.salesBest} />
      <BestBook bestBookList={bestBookListAll.stedyBest} />
    </>
  );

}
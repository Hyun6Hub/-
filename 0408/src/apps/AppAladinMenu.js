import BestBook from '../components/aladin/BestBook.jsx';
import MenuList from '../components/MenuList.jsx';
import '../css/aladin/AladinCommons.css';
import { useState, useEffect } from 'react';

export default function App() {
  //MenuList props 생성
  const menuList = [
    {"href": "#", "name": "주간 베스트", "className": "best__book__menu"},
    {"href": "#", "name": "지금 베스트", "bg": ""},
    {"href": "#", "name": "특가 베스트", "bg": ""},
    {"href": "#", "name": "신간 베스트", "bg": ""},
    {"href": "#", "name": "스테디 베스트", "bg": ""}
  ]

  const [bestBookListAll, setBestBookListAll] = useState([]); 
  useEffect(()=>{
    fetch('data/best_book_all.json')
      .then(res => res.json())
      .then(result => setBestBookListAll(result))
      .catch(error => console.log(error))
  }, []);


  return (
    <>
      <MenuList list = {menuList} />
      <BestBook bestBookList={bestBookListAll.weeklyBest} />
      {/* <BestBook bestBookList={bestBookListAll.salesBest} />
      <BestBook bestBookList={bestBookListAll.stedyBest} /> */}
    </>
  );

}
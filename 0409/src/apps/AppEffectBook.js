import React, { useState, useEffect } from 'react';
import ButtonMenu from '../components/ButtonMenu.jsx';

export default function App() {
  const menuList = [
    {kname: '종합', ename:'best'},
    {kname: '실시간', ename:'realTime'},
    {kname: '특가', ename:'hotPrice'},
    {kname: '일별', ename:'day'},
    {kname: '월별/주별', ename:'monthweekly'},
    {kname: '스테디', ename:'steady'},
  ];

  const [title, setTitle] = useState('');
  const [type, setType] = useState('best');

  useEffect(()=>{
    fetch('/data/best_book_all2.json')
      .then(res => res.json())
      .then(result => {
        const filterItem = result.filter(item => item.type === type);
        // JSON 파일의 변수에 저장된 프로퍼티는 []로 표현
        setTitle(filterItem[0][type].title);
      })
      .catch(error => console.log(error));
  }, [type]);

  const changeButton = ({type}) => {
    setType(type);
  }

    return (
      <div>
        <nav>
          {menuList.map(menu => (
            <ButtonMenu menu={menu}  click={changeButton}/>
          ) )}
        </nav>
        <hr/>
        <div id="list">{title}</div>
      </div>
    );
}
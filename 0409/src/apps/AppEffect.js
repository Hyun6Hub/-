import React, { useState, useEffect } from 'react';
import ButtonMenu from '../components/ButtonMenu.jsx';

export default function App() {
  const menuList = ['fruit', 'food'];

  const contentList = [
    {
      "type" : "fruit",
      "list" : ['🍓', '🍊', '🍉']
    },
    {
      "type" : "food",
      "list" : ['🌭', '🍔', '🍕']
    }
  ];

  const [list, setList] = useState(contentList[0].list);
  const [type, setType] = useState('fruit');

  const changeList = ({type}) => {
    // alert(type);
    // contentList 배열에 있는 type에 맞추어 filtering을 진행하고 결과를 list에 set!!
    const filterItem = contentList.filter(itemObj => itemObj.type === type);
    setList(filterItem[0].list);
    setType(type);
  }

  useEffect(()=>{
    const colorList = [
      {type:'fruit', bg:'yellow'},
      {type:'food', bg:'cyan'},
    ];
    const filterColor = colorList.filter(colorObj => colorObj.type === type);
    document.getElementById("list").innerHTML = list;
    document.getElementById("list").style.backgroundColor = filterColor[0].bg;

  }, [list, type]);

    return (
      <div>
        <nav>
          {menuList.map(name => (
            <ButtonMenu name={name} clickEvent={changeList}/>
          ) )}
        </nav>
        <hr/>
        <div id="list"></div>
      </div>
    );
}
import React from 'react';

export default function ButtonMenu({menu, click}) {

  const handleClick = () => {
    //자식에서 이벤트 처리
    //그 결과를 부모에게 전달!!!  ->> clickEvent
    // clickEvent({type:name});
    click({type:menu.ename});
  }

    return (
      <button type="button" onClick={handleClick}>{menu.kname}</button>
    );
}
import React, { useState } from 'react';
import Counter from '../components/Counter';
import '../css/Counter.css';

/**
 * 버튼 클릭 시 숫자를 증가/감소하는 기능 구현
 * @returns 
 */
export default function App() {
  const [totalCount, setTotalCount] = useState(0);
  const handleClick = (event) => {

    // console.log(event);

    if(event.type === 'plus'){
      setTotalCount((pre) => pre + event.value);
    } else{ 
      totalCount > 0 ? 
        setTotalCount((pre) => pre - event.value) : setTotalCount(0);
    }
  }

    return (
      <div>
        <p style={{fontSize:'50px'}}>Total : {totalCount} </p>
        <Counter value='1' onClick={handleClick}/>
        <Counter value='3' onClick={handleClick}/>
        <Counter value='5' onClick={handleClick}/>
      </div>
    );
}
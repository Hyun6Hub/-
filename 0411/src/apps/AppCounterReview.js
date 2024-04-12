import React, { useState } from 'react';
import CounterReview from '../components/CounterReview';

/**
 * 1. 컴포넌트 기준으로 독립적으로 실행
 * 2. 독립적으로 일어나는 상태값은 상위 컴포넌트에서 이벤트함수를
 *    전달하고 결과를 받아서 실행
 */
export default function App() {
  const [total, setTotal] = useState(0);
  const handleTotal = ({type}) => {
    console.log(type);
    if(type === 'plus'){
      setTotal(total + 1);
    }else{
      setTotal(total - 1);
    }
  }

    return (
      <div>
        <h2>Total : {total}</h2>
        <CounterReview onClick = {handleTotal}/>       
        <CounterReview onClick = {handleTotal}/>       
        <CounterReview onClick = {handleTotal}/>       
        <CounterReview onClick = {handleTotal}/>       
      </div>
    );
}
import React, { useState } from 'react';

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const value = parseInt(props.value);

  const increment = () => {
    //maxValue ==> 10
    // count < 10 ? setCount(count+1) : setCount(10);
    setCount(count+value);
    props.onClick({type:'plus', value:value}); // 부모에게 이벤트 전달
  }
  const decrement = () => {
    //minValue ==> 1
    count > 1 ? setCount(count-value) : setCount(0);
    props.onClick({type:'minus', value:value});
  }

    return (
    <>
      <div className="counter">        
        <h2>{value}씩 증감</h2>
        <h1 className="counter-value">{count}</h1>
        <div className="counter-button">
          <button className="button" type="button" onClick={increment}>증가(+)</button>
          <button className="button" type="button" onClick={decrement}>감소(-)</button>
        </div>
      </div>
    </>
    );
}
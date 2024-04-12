import React, {useState} from 'react';

export default function CounterReview({onClick}) {
  const [number, setNumber] = useState(0);
  const handleClickPlus = () => {
    setNumber(number + 1);
    onClick({type:'plus'});  //부모에게 전달
  }
  const handleClickMinus = () => {
    setNumber(number - 1);
    onClick({type:'minus'});  //부모에게 전달
  }

    return (
      <div>
          <h3>{number}</h3>
          <button type='button' onClick={handleClickPlus}>증가(+)</button>
          <button type='button' onClick={handleClickMinus}>감소(-)</button>
      </div>
    );
}
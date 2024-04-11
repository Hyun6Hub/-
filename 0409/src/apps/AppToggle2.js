import React, { useEffect, useState } from 'react';

export default function App() {
  const [nameFlag, setNameFlag] = useState(false);

  const handleClick = () => {
    setNameFlag(!nameFlag);
  }

  useEffect(() => {
    if(!nameFlag) {
      document.getElementById('myButton').innerHTML = '클릭하세요!';
      document.getElementById('myButton').style.color = 'tomato';
    }else{
      document.getElementById('myButton').innerHTML = '클릭완료!!';
      document.getElementById('myButton').style.color = 'blue';
    }
  }, [nameFlag]);

    return (
      <div>
        <button type='button' id='myButton' onClick={handleClick}
        >'클릭하세요!'</button>
      </div>
    );
}
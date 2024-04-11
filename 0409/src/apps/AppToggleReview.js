import React, { useState, useEffect } from 'react';

export default function App() {
  const [checked, setChecked] = useState(false);

  //checkd 값이 true인 경우 -> 오렌지
  //checkd 값이 false인 경우 -> 딸기
  useEffect(()=>{
    if(checked) {
      // console.log('🍊');
      document.getElementById('fruit').innerHTML = '🍊';
    } else {
      // console.log('🍓');
      document.getElementById('fruit').innerHTML = '🍓';
    }
  }, [checked]);

    return (
      <div>
        <div id="fruit">'🍓'</div>
        <input type="checkbox" onChange={()=>setChecked(!checked)}/> Toggle
      </div> 
    );
}
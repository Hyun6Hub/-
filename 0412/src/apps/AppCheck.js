import React, { useState } from 'react';

export default function App() {
  const [checkList, setCheckList] = useState([
    {id: 1, title: "상품 1", checked: false}, 
    {id: 2, title: "상품 2", checked: false},
    {id: 3, title: "상품 3", checked: false},
    {id: 4, title: "상품 4", checked: false},
    {id: 5, title: "상품 5", checked: false},
  ]);

  // 개별 체크박스 이벤트 처리 함수
  const handleChange = (id) => {    
    const updateCheckList = checkList.map(checkbox =>       
      checkbox.id === id ? {...checkbox, checked: !checkbox.checked} : checkbox
    );
    setCheckList(updateCheckList);
  }

  // 전체선택 체크박스 이벤트 처리 함수
  const handleAllChange = (checkFlag) => {
    //checkFlag가 true/false 전체상품의 checked 값을 true/false 변경
    const updateCheckList = checkList.map(checkbox =>    
      ({...checkbox, checked: checkFlag}) 
    );
    setCheckList(updateCheckList);
  }

  // 장바구니 담기 함수
  const addCart = () => {
    //checkList -> filter:true인 값만 필터링 ->  map: id만 추출
    const idList = checkList
                      .filter(checkbox => checkbox.checked === true)
                      .map(obj => obj.id);
   alert(idList)                      
    //필터링                 
    // [  {id: 1, title: "상품 1", checked: true},
    //    {id: 3, title: "상품 3", checked: true},]

    // map 적용
    // [ 1, 3 ]
  }


    return (
      <div>
        <p>
          <input type="checkbox" 
                 onChange={(e) => handleAllChange(e.target.checked)}/> 전체선택
        </p>
        <hr/>
        <div>
          {checkList.map(checkbox => (
            <p key={checkbox.id}>
              <input type="checkbox" 
                    checked={checkbox.checked} 
                    onChange={() => handleChange(checkbox.id)}
                    /> {checkbox.title}
            </p>
          ))}
        </div>
        <button type="button"
                onClick={addCart}>장바구니 담기</button>
      </div>
    );
}
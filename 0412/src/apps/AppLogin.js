import React, { useState, useRef } from 'react';

export default function App() {
  const [formData, setFormData] = useState({id:'', pass:''});
  const idRef = useRef(null);
  const passRef = useRef(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    //validation check!!(유효성 체크)
    if(validationCheck()){
      // 서버 전송
      console.log('submit => ', formData);
    } else {
      // 서버 전송 실패
    }
  }

  //유효성 체크 함수
  const validationCheck = () => {
    let checkFlag = true;

    if(!formData.id.trim()){
      alert('아이디를 입력해주세요');
      idRef.current.focus();
      checkFlag = false;
    }else if(!formData.pass.trim()){
      alert('패스워드를 입력해주세요');
      passRef.current.focus();
      checkFlag = false;
    }
    return checkFlag;
  }

  const handleReset = () => {
    setFormData({id:'', pass:''});
  }


    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <input type="text" 
                    name="id" 
                    value={formData.id}
                    placeholder='user Id'
                    onChange={handleChange}
                    ref={idRef} />
            </li>
            <li>
              <input type="password" 
                    name="pass" 
                    value={formData.pass}
                    placeholder='user password'
                    onChange={handleChange}
                    ref={passRef} />
            </li>
            <li>
              <button type="submit">Login</button>
              <button type="button" onClick={handleReset}>Reset</button>
            </li>
          </ul>
        </form>
      </div>
    );
}
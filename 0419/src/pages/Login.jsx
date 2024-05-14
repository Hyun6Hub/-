import React, { useState, useRef } from 'react';

export default function Login() {
  const userIdRef = useRef(null);
  const userPassRef = useRef(null);
  const [formData, setFormData] = useState({userId:'', userPass:''});

  const handleChange = (e) => {
    const {name, value} = e.target;   // {name:userId, value:'test'},{name:userPass, value:'1234'}
    setFormData({...formData, [name]:value});
  }

  const handleSubmit = (e) => {  //submit 버튼이 클릭했습니다. 이벤트!!!
    e.preventDefault();

    if(validataionCheck()){ //validataionCheck() 결과가 true이면 서버전송
      console.log(formData);

      //서버전송 GET : 패킷(header) : url => axios.get()  ==> /:id 
      //서버전송 POST : 패킷(body) => axios.post()
    }
  }

  //validataionCheck()
  const validataionCheck = () => {
    let checkFlag = true;

    if(!formData.userId.trim()){
      alert("아이디를 입력해주세요");
      userIdRef.current.focus();
      checkFlag = false;
    } else if(!formData.userPass.trim()){
      alert("패스워드를 입력해주세요");
      userPassRef.current.focus();
      checkFlag = false;
    }
    return checkFlag;
  }
  

    return (
      <div className='content'>
        <div className='login'>
          <h2>SHOPPY LOGIN</h2>
          <form className='login-form' onSubmit={handleSubmit}>
            <ul>
              <li>
                <label>아 이 디</label> 
                <input type="text" name="userId" 
                        ref = {userIdRef}
                        value={formData.userId} onChange={handleChange}/>
              </li>
              <li>
                <label>패스워드</label> 
                <input type="password" name="userPass" 
                        ref = {userPassRef}
                        value={formData.userPass} onChange={handleChange}/>
              </li>
              <li>
                <button type="submit">Login</button>
                <button type="button">Reset</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
}



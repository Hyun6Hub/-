import React, { useState, useRef } from 'react';

export default function App() {
  const initFormData = {
    name:'', id: '', pass:'', cpass:'', email:'', phone:'', grade:'member'
  };
  const initFormError = {
    name:'', id: '', pass:'', cpass:'', email:''
  };
  const [formData, setFormData] = useState(initFormData);
  const [formError, setFormError] = useState(initFormError);
  const refName = useRef(null);
  const refId = useRef(null);
  const refPass = useRef(null);
  const refCpass = useRef(null);
  const refEmail = useRef(null);

  //폼 데이터 변경시 호출 이벤트
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }
 
  //서버 전송
  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateCheck()){
      console.log('submit==>> ', formData);
    }
  }

  //유효성 체크(validation check)
  const validateCheck = () => {
    let checkFlag = true;
    const errors = {};

    if(!formData.name.trim()) {
      errors.name = "이름을 입력해주세요";
      // refName.current.focus();
      checkFlag = false;
    }  
    if(!formData.id.trim()) {
      errors.id = "아이디를 입력해주세요";
      // refId.current.focus();
      checkFlag = false;
    } 
    if(!formData.pass.trim()) {
      errors.pass = "암호를 입력해주세요";
      // refPass.current.focus();
      checkFlag = false;
    } 
    if(!formData.cpass.trim()) {
      errors.cpass = "암호확인을 입력해주세요";
      // refCpass.current.focus();
      checkFlag = false;
    } 
    if(!formData.email.trim()) {
      errors.email = "이메일을 입력해주세요";
      // refEmail.current.focus();
      checkFlag = false;
    }
    
    //해당 에러의 맨위 element에 focus 설정
    const keys = Object.keys(errors);
    const fElement = document.querySelector(`[name="${keys[0]}"]`);
    fElement.focus();
    
    setFormError(errors);
    return checkFlag;
  }

  //암호 && 암호확인 비교 함수
  const handlePassCheck = () => {
    if(formData.pass.trim()) {
      if(formData.pass === formData.cpass){
        alert("암호 일치!");
      }else {
        alert("암호 불일치! 다시 입력해주세요");
        setFormData({...formData, pass:'', cpass:''});
        refPass.current.focus();
      }
    }
  }

    return (
      <div>
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label><span>*</span>이름</label>
            <input type="text" name="name" 
                    value={formData.name} onChange={handleChange}
                    ref={refName}/>
            <span style={{color:'red', fontSize:'12px'}}>{formError.name}</span>                    
          </li>
          <li>
            <label><span>*</span>아이디</label>
            <input type="text" name="id" value={formData.id} 
                    onChange={handleChange}
                    ref={refId}/>
            <button type="button">중복확인</button>
            <span style={{color:'red', fontSize:'12px'}}>{formError.id}</span>
          </li>
          <li>
            <label><span>*</span>암호</label>
            <input type="password" name="pass" 
                      value={formData.pass} onChange={handleChange}
                      ref={refPass}/>
            <span style={{color:'red', fontSize:'12px'}}>{formError.pass}</span>
          </li>
          <li>
            <label><span>*</span>암호확인</label>
            <input type="password" name="cpass" 
                    value={formData.cpass} 
                    onChange={handleChange}
                    onBlur={handlePassCheck}
                    ref={refCpass}/>
            <span style={{color:'red', fontSize:'12px'}}>{formError.cpass}</span>                    
          </li>
          <li>
            <label><span>*</span>이메일</label>
            <input type="text" name="email" 
                    value={formData.email} onChange={handleChange}
                    ref={refEmail}/>
            <span style={{color:'red', fontSize:'12px'}}>{formError.email}</span>
          </li>
          <li>
            <label>전화번호</label>
            <input type="text" name="phone" 
                        value={formData.phone} onChange={handleChange}/>
          </li>
          <li>
            <label>등급</label>
            <input type="radio" name="grade" value="member"
                    checked={formData.grade === "member"}
                    onChange={handleChange}/>일반회원
            <input type="radio" name="grade" value="admin"
                    checked={formData.grade === "admin"}
                    onChange={handleChange}/>관리자
          </li>
          <li>
            <button type="submit">회원가입</button>
            <button type="button">다시입력</button>
          </li>
        </ul>
        </form>
      </div>
    );
}
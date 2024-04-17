import React, { useState, useRef } from 'react';

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(
    {
      service:false, 
      personal:false
    }
  );


  //step1에서 체크박스 이벤트가 발생하면 부모에서 처리!!
  const handleCheck = (type, isChecked) => {
    if(type === "all"){
      setFormData({...formData, service:isChecked, personal:isChecked});
    } else {
      setFormData({...formData, [type]:!formData[type]});
    }
  }

  console.log(formData);

  const nextStep = () => {
    setStep(step + 1);
  }

  const preStep = () => {
    setStep(step - 1);
  }

    return (
      <div className='content'>
        { step === 1 && (
          <SignupStep1 next={nextStep}  
                        formData={formData}
                        handleCheck={handleCheck} />        
        ) }
        { step === 2 && (
          <SignupStep2 pre={preStep} 
                        next={nextStep}
                        formData={formData} />        
        ) }
        { step === 3 && (
          <SignupStep3 pre={preStep}/>        
        ) }
      </div>
    );
}

/**
* step1 : 약관동의
*/
export function SignupStep1({next, formData, handleCheck}) {
  /**
   * validateCheck() : 유효성 체크 - service, personal 체크박스 
   */
  const validateCheck = () => {
    // console.log('step==>> ',formData);
    if(!formData.service) {
      alert("서비스 약관에 동의해주세요");
      document.getElementById("service").style.outline = "1px solid red";
    } else if(!formData.personal) {
      alert("개인정보 이용 약관에 동의해주세요");
      document.getElementById("personal").style.outline = "1px solid red";
    } else {
      next();
    }
  }

  /**
   * handleFocus() : 포커스에 따라 outline 삭제
   */
  const handleFocus = (type) => {
    if(type === "service"){
      document.getElementById("service").style.outline = "none";
    } else if(type === "personal") {
      document.getElementById("personal").style.outline = "none";
    } else if(type === "all") {
      document.getElementById("service").style.outline = "none";
      document.getElementById("personal").style.outline = "none";
    }
  }


    return (
      <div className='signup'>
        <h2>SHOPPY SIGNU</h2>     
        <div>
          <h3>약관동의</h3>
          <p>회원가입에 필요한 약관에 동의합니다.</p>
        </div> 
        <div>
          <div>
            <input type="checkbox" 
                   onChange={(e) => handleCheck("all",e.target.checked)}
                   onFocus={() => handleFocus("all")}/>
            <span>모두 동의합니다.</span>
          </div>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis facilis quidem dolores minus. Tenetur id quasi eaque itaque. Nisi reprehenderit error quasi aspernatur veritatis consequuntur ipsam molestias minima ratione magnam?
          </p>
        </div> 
        <div>
          <h4>서비스 약관 동의</h4>
          <textarea>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum, explicabo cum dicta ad consequatur aliquam asperiores soluta eum recusandae aliquid, unde neque libero vel voluptas quos cupiditate rem. A!
          </textarea>
          <div >
            <input type="checkbox" 
                    name="sevice"
                    id="service"
                   checked={formData.service}
                   onChange={()=> handleCheck("service")} 
                   onFocus={()=> handleFocus("service")}
                   />
            <span>동의합니다.</span>
          </div>
        </div>
        <div>
          <h4>개인정보 수집 및 이용 동의</h4>
          <textarea>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum, explicabo cum dicta ad consequatur aliquam asperiores soluta eum recusandae aliquid, unde neque libero vel voluptas quos cupiditate rem. A!
          </textarea>
          <div>
            <input type="checkbox" 
                   name="personal"
                   id="personal"
                   checked={formData.personal}
                   onChange={()=>handleCheck("personal")}
                   onFocus={()=> handleFocus("personal")}/>
            <span>동의합니다.</span>
          </div>
        </div>
          <button type="button" onClick={validateCheck}>다음</button>  
        </div>
      
    );
}

/**
* step2 : 정보입력
*/
export function SignupStep2({pre, next, formData, handleChange}) {
  // console.log('step2-->>> ', formData);  

  
    return (
      <div className='signup'>
        <h2>SHOPPY SIGNUP</h2>
        <div>
          <h3>정보입력</h3>
          <p>회원가입에 필요한 정보를 입력합니다.</p>
        </div> 
        <ul className='signup-info'>
          <li>
            <p>아이디<span>*</span></p>
            <input type="text" 
                   name="userId"
                    />
            <button type="button">중복확인</button>
          </li>
          <li>
            <p>비밀번호<span>*</span></p>
            <input type="password" 
                    name="userPass"                     
                    placeholder="8~12자 의 영문(대소문자,숫자,특수문자)를 조합해서 만들어주세요"/>
          </li>
          <li>
            <p>비밀번호 확인<span>*</span></p>
            <input type="password"
                   name="userPassCheck"                  
                   placeholder="확인을 위하여 위와 동일하게 입력해주세요" />
          </li>
          <li>
            <p>이름<span>*</span></p>
            <input type="text"
                    name="userName"                   
                    placeholder="한글/영문으로 입력해주세요" />
          </li>
          <li>
            <p>이메일<span>*</span></p>
            <input type="text" name="emailId"/> @ 
            <input type="text" name="emailDomain"/>
            <select name="emailDomain"  >
              <option value="self">직접입력</option>
              <option value="naver.com">네이버</option>
              <option value="gmail.com">구글</option>
              <option value="hotmail.com">MS</option>
            </select>
          </li>
          <li>
            <p>휴대폰 번호<span>*</span></p>
            <select name="phoneNumber1">
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
            </select>
            <input type="text" 
                   name="phoneNumber2"
                   placeholder="-없이 입력해주세요" />
          </li>
          <li>
            <p>주소</p>
            <div>
              <input type="text" 
                    name="zipcode" />
              <button type="button">주소검색</button>
            </div>
            <input type="text" 
                   name="address"
                   placeholder="상세주소를 입력해주세요" />
          </li>
        </ul> 
        <button type="button" onClick={pre}>뒤로</button>  
        <button type="button" >가입완료</button>  
      </div>
    );
}

/**
* step3 :  가입완료
*/
export function SignupStep3({pre}) {
    return (
      <div>
        <h2>SHOPPY SIGNUP</h2> 
        <button type="button" onClick={pre}>이전</button> 
        <button type="button" >로그인</button> 
      </div>
    );
}

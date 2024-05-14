import React, { useState } from 'react';

export default function Signup() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  }

  const preStep = () => {
    setStep(step - 1);
  }

    return (
      <div className='content'>
        { step === 1 && (
          <SignupStep1 next={nextStep}    />        
        ) }
        { step === 2 && (
          <SignupStep2 pre={preStep} next={nextStep} />        
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
export function SignupStep1({next}) {
 

    return (
      <div className='signup'>
        <h2>SHOPPY SIGNUP</h2>       
          <button type="button" onClick={next}>다음</button>  
        </div>
      
    );
}

/**
* step2 : 정보입력
*/
export function SignupStep2({pre, next, formData}) {

  console.log('step2-->>> ', formData);

    return (
      <div>
        <h2>SHOPPY SIGNUP</h2> 
        <button type="button" onClick={pre}>이전</button>  
        <button type="button" onClick={next}>다음</button>  
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
        <button type="button" >가입완료</button> 
      </div>
    );
}

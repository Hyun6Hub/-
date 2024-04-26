import { useRef } from "react";
import {
  validateCheckStep2,
  passCheck,
  changeEmailDomain,
} from "../apis/validate.js";
import axios from "axios";
/**
 * step2 : 정보입력
 */
export default function SignupStep2({ pre, next, formData, handleChange }) {
  const refs = {
    userIdRef: useRef(null),
    userPassRef: useRef(null),
    userPassCheckRef: useRef(null),
    userNameRef: useRef(null),
    emailIdRef: useRef(null),
    emailDomainRef: useRef(null),
    phoneNumber1Ref: useRef(null),
    phoneNumber2Ref: useRef(null),
    zipcodeRef: useRef(null),
    addressRef: useRef(null),
  };

  /**
   * submit : 서버전송
   */
  const handleSubmit = () => {
    if (validateCheckStep2(refs)) {
      if (passCheck(refs)) {
        //서버전송 : formData ==> 서버(NodeJS/Java/C#) ==> DB(MySQL) 저장
        //성공 ---> next()
        //실패 ---> 에러 페이지
        console.log("submit->> ", formData);

        const url = "http://127.0.0.1:8080/member/signup";
        axios({
          method: "post",
          url: url,
          data: formData,
        })
          .then((res) => {
            if (res.data.cnt === 1) {
              // alert("회원가입 성공");
              next();
            } else {
              alert("회원가입 실패"); /* 실패할리 없음 리턴만주니까 */
            }
          })
          .catch();

        // next();
      }
    }
  };
  /* 아이디 중복체크 */
  const handleIdCheck = () => {
    if (refs.userIdRef.current.value == "") {
      alert("아이디를 입력해주세요");
      refs.userIdRef.current.focus();
    } else {
      const url = "http://127.0.0.1:8080/member/idCheck";
      const userId = refs.userIdRef.current.value;
      axios({
        method: "post",
        url: url,
        data: { userId: userId },
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.cnt === 1) {
            alert("이미 사용중인 아이디");
            // refs.userIdRef.current.value = "";
            refs.userIdRef.current.focus();
          } else {
            alert("사용 가능한 아이디에요");
            refs.userPassRef.current.focus();
          }
        })
        .catch((error) => console.log(error));
      //서버연동 - 사용중 1, 사용가능 0
    }
  };

  return (
    <div className="signup">
      <h2>SHOPPY SIGNUP</h2>
      <div>
        <h3>정보입력</h3>
        <p>회원가입에 필요한 정보를 입력합니다.</p>
      </div>
      <ul className="signup-info">
        <li>
          <p>
            아이디<span>*</span>
          </p>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            ref={refs.userIdRef}
          />
          <button type="button" onClick={handleIdCheck}>
            중복확인
          </button>
        </li>
        <li>
          <p>
            비밀번호<span>*</span>
          </p>
          <input
            type="password"
            name="userPass"
            value={formData.userPass}
            onChange={handleChange}
            ref={refs.userPassRef}
            placeholder="8~12자 의 영문(대소문자,숫자,특수문자)를 조합해서 만들어주세요"
          />
        </li>
        <li>
          <p>
            비밀번호 확인<span>*</span>
          </p>
          <input
            type="password"
            name="userPassCheck"
            value={formData.userPassCheck}
            onChange={handleChange}
            ref={refs.userPassCheckRef}
            placeholder="확인을 위하여 위와 동일하게 입력해주세요"
          />
        </li>
        <li>
          <p>
            이름<span>*</span>
          </p>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            ref={refs.userNameRef}
            placeholder="한글/영문으로 입력해주세요"
          />
        </li>
        <li>
          <p>
            이메일<span>*</span>
          </p>
          <input
            type="text"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
            ref={refs.emailIdRef}
          />{" "}
          @
          <input
            type="text"
            name="emailDomain"
            value={formData.emailDomain}
            onChange={handleChange}
            ref={refs.emailDomainRef}
          />
          <select
            name="emailDomain"
            onChange={(e) => changeEmailDomain(e, refs, handleChange)}
          >
            <option value="self">직접입력</option>
            <option value="naver.com">네이버</option>
            <option value="gmail.com">구글</option>
            <option value="hotmail.com">MS</option>
          </select>
        </li>
        <li>
          <p>
            휴대폰 번호<span>*</span>
          </p>
          <select name="phoneNumber1">
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
          </select>
          <input
            type="text"
            name="phoneNumber2"
            value={formData.phoneNumber2}
            onChange={handleChange}
            ref={refs.phoneNumber2Ref}
            placeholder="-없이 입력해주세요"
          />
        </li>
        <li>
          <p>주소</p>
          <div>
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              ref={refs.zipcodeRef}
            />
            <button type="button">주소검색</button>
          </div>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            ref={refs.addressRef}
            placeholder="상세주소를 입력해주세요"
          />
        </li>
      </ul>
      <button type="button" onClick={pre}>
        뒤로
      </button>
      <button type="button" onClick={handleSubmit}>
        가입완료
      </button>
    </div>
  );
}

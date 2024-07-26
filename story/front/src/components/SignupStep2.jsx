import React, { useRef, useState } from "react";
import {
  validateCheckStep2,
  passCheck,
  changeEmailDomain,
} from "../apis/validate.js";

// 임시 더미 함수
const checkDuplicateId = async () => false;
const searchAddress = async () => ({
  zipcode: "12345",
  fullAddress: "서울시 강남구",
});

export default function SignupStep2({ pre, next, formData, handleChange }) {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

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

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "userId":
        if (value.length < 4) error = "아이디는 4자 이상이어야 합니다.";
        break;
      case "userPass":
        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value
          )
        ) {
          error =
            "비밀번호는 8자 이상이며, 대소문자, 숫자, 특수문자를 포함해야 합니다.";
        }
        setPasswordStrength(calculatePasswordStrength(value));
        break;
      case "userPassCheck":
        if (value !== formData.userPass)
          error = "비밀번호가 일치하지 않습니다.";
        break;
      case "emailId":
      case "emailDomain":
        if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            `${formData.emailId}@${formData.emailDomain}`
          )
        ) {
          error = "유효한 이메일 주소를 입력해주세요.";
        }
        break;
      case "phoneNumber2":
        if (!/^\d{7,8}$/.test(value)) error = "올바른 전화번호를 입력해주세요.";
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    handleChange(e);
    validateField(name, value);
  };

  const handleDuplicateCheck = async () => {
    setLoading(true);
    try {
      const isDuplicate = await checkDuplicateId(formData.userId);
      if (isDuplicate) {
        setErrors((prev) => ({
          ...prev,
          userId: "이미 사용 중인 아이디입니다.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, userId: "" }));
        alert("사용 가능한 아이디입니다.");
      }
    } catch (error) {
      console.error("아이디 중복 확인 중 오류 발생:", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddressSearch = async () => {
    try {
      const address = await searchAddress();
      handleChange({ target: { name: "zipcode", value: address.zipcode } });
      handleChange({ target: { name: "address", value: address.fullAddress } });
    } catch (error) {
      console.error("주소 검색 중 오류 발생:", error);
      alert("주소 검색에 실패했습니다.");
    }
  };

  const handleSubmit = async () => {
    if (validateCheckStep2(refs) && passCheck(refs)) {
      setLoading(true);
      try {
        // 서버로 데이터 전송 로직 (실제 구현 필요)
        console.log("폼 데이터 제출:", formData);
        next();
      } catch (error) {
        console.error("폼 제출 중 오류 발생:", error);
        alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="signup">
      <h2>SHOPPY 회원가입</h2>
      <div>
        <h3>정보입력</h3>
        <p>회원가입에 필요한 정보를 입력합니다.</p>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <ul className="signup-info">
          <li>
            <label htmlFor="userId">
              아이디<span>*</span>
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleFieldChange}
              ref={refs.userIdRef}
            />
            <button
              type="button"
              onClick={handleDuplicateCheck}
              disabled={loading}
            >
              중복확인
            </button>
            {errors.userId && <span className="error">{errors.userId}</span>}
          </li>
          <li>
            <label htmlFor="userPass">
              비밀번호<span>*</span>
            </label>
            <input
              type="password"
              id="userPass"
              name="userPass"
              value={formData.userPass}
              onChange={handleFieldChange}
              ref={refs.userPassRef}
              placeholder="8~12자의 영문(대소문자,숫자,특수문자)를 조합해서 만들어주세요"
            />
            {errors.userPass && (
              <span className="error">{errors.userPass}</span>
            )}
            {/* 비밀번호 강도 표시 (추후 구현) */}
          </li>
          <li>
            <label htmlFor="userPassCheck">
              비밀번호 확인<span>*</span>
            </label>
            <input
              type="password"
              id="userPassCheck"
              name="userPassCheck"
              value={formData.userPassCheck}
              onChange={handleFieldChange}
              ref={refs.userPassCheckRef}
              placeholder="확인을 위하여 위와 동일하게 입력해주세요"
            />
            {errors.userPassCheck && (
              <span className="error">{errors.userPassCheck}</span>
            )}
          </li>
          <li>
            <label htmlFor="userName">
              이름<span>*</span>
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleFieldChange}
              ref={refs.userNameRef}
              placeholder="한글/영문으로 입력해주세요"
            />
          </li>
          <li>
            <label htmlFor="emailId">
              이메일<span>*</span>
            </label>
            <input
              type="text"
              id="emailId"
              name="emailId"
              value={formData.emailId}
              onChange={handleFieldChange}
              ref={refs.emailIdRef}
            />{" "}
            @
            <input
              type="text"
              name="emailDomain"
              value={formData.emailDomain}
              onChange={handleFieldChange}
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
            {errors.emailId && <span className="error">{errors.emailId}</span>}
          </li>
          <li>
            <label htmlFor="phoneNumber1">
              휴대폰 번호<span>*</span>
            </label>
            <select
              id="phoneNumber1"
              name="phoneNumber1"
              ref={refs.phoneNumber1Ref}
            >
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
            </select>
            <input
              type="text"
              name="phoneNumber2"
              value={formData.phoneNumber2}
              onChange={handleFieldChange}
              ref={refs.phoneNumber2Ref}
              placeholder="-없이 입력해주세요"
            />
            {errors.phoneNumber2 && (
              <span className="error">{errors.phoneNumber2}</span>
            )}
          </li>
          <li>
            <label htmlFor="zipcode">주소</label>
            <div>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleFieldChange}
                ref={refs.zipcodeRef}
              />
              <button type="button" onClick={handleAddressSearch}>
                주소검색
              </button>
            </div>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleFieldChange}
              ref={refs.addressRef}
              placeholder="상세주소를 입력해주세요"
            />
          </li>
        </ul>
        <button type="button" onClick={pre} disabled={loading}>
          뒤로
        </button>
        <button type="button" onClick={handleSubmit} disabled={loading}>
          가입완료
        </button>
      </form>
      {loading && <div>로딩 중...</div>}
    </div>
  );
}

// 비밀번호 강도 계산 함수 (간단한 예시)
function calculatePasswordStrength(password) {
  let strength = 0;
  if (password.length > 7) strength++;
  if (password.match(/[a-z]+/)) strength++;
  if (password.match(/[A-Z]+/)) strength++;
  if (password.match(/[0-9]+/)) strength++;
  if (password.match(/[$@#&!]+/)) strength++;
  return strength;
}

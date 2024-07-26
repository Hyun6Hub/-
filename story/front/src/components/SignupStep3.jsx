import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignupStep3() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 여기서는 서버 연동 없이 바로 로그인 페이지로 이동합니다.
    // 실제 구현에서는 서버에 로그인 요청을 보내고 응답을 처리해야 합니다.
    navigate("/login");
  };

  return (
    <div className="signup">
      <h2>SHOPPY SIGNUP</h2>
      <img
        src="https://media.istockphoto.com/id/1319232417/ko/%EC%82%AC%EC%A7%84/%EB%B3%B5%EC%82%AC-%EA%B3%B5%EA%B0%84%EC%9C%BC%EB%A1%9C-%EC%84%B1%EA%B3%B5-%EB%B0%B0%EA%B2%BD-%EC%B8%A1%EC%A0%95.jpg?s=612x612&w=0&k=20&c=Qui3JZ6CvUt49gtkeNOqNIECVNJ-AodfFMbP3my3Ehs="
        alt="회원가입 성공"
      />
      <p>회원가입에 성공하셨습니다.</p>
      <button type="button" onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
}

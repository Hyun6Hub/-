import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({ id: "", pass: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation check 유효성체크
    if (!formData.id.trim()) {
      //trim()함수의 리턴값이 ''
      alert("아이디입력해");
    } else if (!formData.pass.trim()) {
      alert("비번입력해");
    } else {
      console.log("submit=>", formData);
    }
  };

  //유효성 체크 함수

  const validationCgeck = () => {};

  const handleReset = () => {
    setFormData({ id: "", pass: "" });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              type="text"
              name="id"
              value={formData.id}
              placeholder="userId"
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="password"
              name="pass"
              value={formData.pass}
              placeholder="user password"
              onChange={handleChange}
            />
          </li>
          <li>
            <button type="submit">Login</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

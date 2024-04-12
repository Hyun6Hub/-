import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", address: "", email: "" });
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handlechange = (event) => {
    const { name, value } = event.target; // {name:value}
    setForm({ ...form, [name]: value });
  };
  const handlechangeName = (e) => {
    const { name, value } = e.target; // {address: 입력한 주소값}
    setAddress(value);
  };

  //서버전송 함수 : handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleReset = () => {};

  return (
    <div>
      <form onsubmit={handleSubmit}>
        <div>
          <ul>
            <li>
              <label>Name</label>
              <input
                type="text"
                name="age"
                value={name}
                onChange={handlechangeName}
              />
              {/* input태그는 서버연동 그때 필요한 필수항목은name, value  name=홍길동 으로 넘어감*/}
            </li>
            <li>
              <label>address</label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={handlechange}
              />
            </li>
            <li>
              <label>email</label>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handlechange}
              />
            </li>
            <li>
              <button type="submit">전송</button>
              <button type="reset" onClick={handleReset}>
                다시입력
              </button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

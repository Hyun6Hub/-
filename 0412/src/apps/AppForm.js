import React, { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({name:'', address:'', email:''});

  const handleChange = (event) => {
    const {name, value} = event.target; 
    setForm({...form, [name]:value});
  }

  //서버전송 함수 : handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault(); 
    //서버 전송 로직 추가!!!!
    console.log('form data => ', form);
  }

  //다시입력
  const handleReset = () => {
    setForm({name:'', address:'', email:''});
  }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>Name </label>      
              <input type="text" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange}/>
            </li>
            <li>
              <label>Address </label>      
              <input type="text" 
                      name="address" 
                      value={form.address} 
                      onChange={handleChange}/>
            </li>
            <li>
              <label>E-mail </label>      
              <input type="text" 
                      name="email" 
                      value={form.email}
                      onChange={handleChange}
                     />
            </li>
            <li>
              <button type="submit">전송</button>
              <button type="reset" onClick={handleReset}>다시입력</button>
            </li>
          </ul>
        </form>
      </div>
    );
}
import Profile from '../components/Profile.jsx';
import { useEffect, useState } from 'react';

export default function App() {
  // profile.json 파일 가져오기 => fetch
  // App 함수 호출시 한번만 fetch() 실행 => useEffect 함수안에 정의
  // useState 함수에서 관리하는 변수에 저장 
  //   => const [변수명, set변수명] = useState(초기값);

  const [profileList, setProfileList] = useState([]);
  
  useEffect(() => {
    fetch('data/profile.json')
      .then((res_data) => res_data.json() )
      .then((json_data) => setProfileList(json_data))
      .catch((error) => console.log(error))
  }, []);

  return (
    <>
    { profileList.map((profile) => (
      <Profile 
          image={profile.image} 
          name={profile.name}
          title={profile.title}
          />
    ))}
    </>
  );
}
import Profile from "../components/Profile.jsx";
import { useEffect, useState } from "react";
// profile.json 파일 가져오기 => fetch
// App 함수 호출시 한번만 fetch() 실행 => useEffect 함수안에 정의
// useState 함수에서 관리하는 변수에 저장
//   => const [변수명, set변수명] = useState(초기값);
/* profileList라는 상태와 그 상태를 업데이트하는 setProfileList 함수
 useState훅을 사용하여 선언 */

export default function App() {
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    fetch("data/profile.json")
      .then((res_data) => res_data.json())
      .then((json_data) => setProfileList(json_data))
      .catch((error) => console.log(error));
  }, []);
  /*  fetch써서 get요청보냄 이 요청은 json경로에서 데이터 가져오는것을 시도
    서버로부터 응답받아와서 json호출해 json형식으로 변환
    변환된 json데이터받아와서 ProfileList업데이트함
*/
  // useEffect훅은 가져오기와 같은 비동기 작업 처리하기 위해 사용됨

  return (
    <>
      {profileList.map((profile) => (
        <Profile
          image={profile.image}
          name={profile.name}
          title={profile.title}
        />
      ))}
    </>
  );
}

// profileList는 json파일에서 가져온 데이터를 담는 변수

// js파일에서 정보 적고 jsx에서 그 정보를 가져와 사용한다
// profile 컴포넌트 가져오는데 그안에 avata컴포넌트도 있다
// profile 컴포넌트에서 개별적으로 렌더링 가능하게함

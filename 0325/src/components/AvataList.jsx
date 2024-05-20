import Avata from "./Avata";

import "../css/AvataList.css";

export default function AvataList({ list }) {
  return (
    <ul className="avata-list">
      {list.map((obj) => (
        <li>
          <Avata image={obj.image} name={obj.name} />
        </li>
      ))}
    </ul>
  );
}
/* AvataList가 전달받음 list배열의 각요소를 
Avata 컴포넌트를 사용하여 렌더링하기 위함 */

/* avata컴포넌트는 이름 이미지 렌더링하는 역할
avatalist에서 리스트 생성하고 표시하려면 avata컴포넌트가 필요함

avata컴포넌트 호출하여 사용자 정보를 리스트 형태로 출력 가능*/

/* list쓰면 하나하나 안적고 적어놓은것을 가져와 쓸수가있다 */

/* list배열 순회하고 각 image, name요소에도 순회하도록해야함 */

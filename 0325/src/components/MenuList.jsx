import Menu from "./Menu.jsx";
import "../css/Menu.css";

export default function MenuList(props) {
  return (
    <ul className="header__menu__list">
      {props.list.map((menu) => (
        <li className="header__menu">
          <Menu href={menu.href} bg={menu.bg} name={menu.name} />
        </li>

        /* props.list는 MenuList컴포넌트에 전달된 list prop을 의미함이 list는 객체들이 담긴 배열 */
        /* map메서드를 사용하여 배열 각항목 순회, 각항목은 menu라는 이름으로 접근 */
        /* 배열의 각항목을 개별적인 링크로 렌더링하려고 menu호출함 앵커태그를 가지고있으니까*/
      ))}
    </ul>
  );
}

/* props는 부모에서 자식으로 값을 전달할 때 사용
부모 컴포넌트 app, 자식 컴포넌트 MenuList */

/*  MenuList는 props를 인자로받음, 이 props객체는 부모 컴포넌트인
app이 전달한 list props를 포함함 */

/* map 함수는 배열의 각 요소를 순회하면서 콜백 함수를 호출하며, 이 콜백함수의 매개변수로 현재 요소를 전달함 */

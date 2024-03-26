import ButtonList from "./Button.jsx";
import "../css/ButtonList.css";
//props = {list:[text:'All', bg:'red', {}...]}
// {list} = props
export default function ButtonList({ list }) {
  //jsp로 만들어진 배열
  return (
    //jsx에서 jsp 변수나 코드를 사용하는경우 {}
    <ul className="button-list">
      {list.map((obj) => (
        <li>
          <Button text={obj.text} bg={obj.bg} />
        </li>
      ))}{" "}
      {/* {}안쓰고 ()씀  대신 return태그써야함*/}
    </ul>
  );
}

import Button from './Button.jsx';
import '../css/ButtonList.css';

//props = {list:[{text:'All', bg:'red'}, {}...]}
// {list} = props
export default function ButtonList({list}) {
  return(
    //JSX에서 자바스크립트 변수나 코드를 사용하는 경우 반드시!!!! {}
    <ul className="button-list">
      {list.map((obj) => (
        <li><Button text={obj.text} bg={obj.bg} /></li>
      ))}  
    </ul>
  );
}
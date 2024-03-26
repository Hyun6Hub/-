import Menu from './Menu.jsx';
import '../css/Menu.css';

export default function MenuList(props) {
  return (
    <ul className="header__menu__list">
      {props.list.map(menu => (
       <li className="header__menu"><Menu href={menu.href} bg={menu.bg} name={menu.name} /></li>
      ))}
    </ul>
  );
}
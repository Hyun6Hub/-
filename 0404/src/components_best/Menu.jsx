import '../css_best/Menu.css';
import { Link } from 'react-router-dom';

export default function Menu({path, name}) {
  return(
    <Link className="header__menu__item" to={path}>{name}</Link>
  ); 
}
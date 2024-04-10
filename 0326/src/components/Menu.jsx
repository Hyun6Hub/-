import '../css/Menu.css';
// props = {href:'#home', name='Home'}
// {href, name} = {href:'#home', name='Home'}
// props = { list: [{image: }, {} ..]}

export default function Menu({href, name, bg}) {
  return(
    <a 
        className="header__menu__item" 
        href={href}
        style={{backgroundColor: bg}}>{name}</a>
  ); 
}
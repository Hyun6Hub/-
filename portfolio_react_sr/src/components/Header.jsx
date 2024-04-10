import React, { useState, useEffect } from 'react';
import Menu from './Menu.jsx';

export default function Header() {
    return (
      <div className="header">
        <HeaderLogo />
        <HeaderMenu />
      </div>
    );
}

/**
* HeaderLogo
*/
export function HeaderLogo() {
    return (
      <div className="header__logo">
        <img className="header__logo__img" 
              src="images/favicon.ico" alt="logo" />
        <h1 className="header__logo__title">Judy</h1>
      </div>
    );
}

/**
* HeaderMenu
*/
export function HeaderMenu() {
  const [menuList, setMenuList] = useState([]);
  useEffect(()=>{
    fetch('data/menu.json')
      .then(res => res.json())
      .then(result => setMenuList(result))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <nav>
        <ul className="header__menu">
          {menuList.map((menu, index) => (
            <li key={index}>
              <Menu  
                    href={menu.href}
                    name={menu.name}/>
            </li>
          ))}           
        </ul>
      </nav>
      <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle">
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
}


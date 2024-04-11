import React from 'react';
import Menu from './Menu.jsx';

export default function Navbar() {
  const menuList = [
    { path: "/", name: "종합" },
    { path: "/realtime", name: "실시간" },
    { path: "/hotprice", name: "특가" },
    { path: "/day", name: "일별" },
    { path: "/monthweekly", name: "월별/주별" },
    { path: "/steady", name: "스테디" },
  ];
    return (
      <div className='header__menu'>
        {menuList.map(menu => (
          <Menu path={menu.path} name={menu.name} />
        ))}       
      </div>
    );
}
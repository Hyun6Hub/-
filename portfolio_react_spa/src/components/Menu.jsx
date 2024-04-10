import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu({path, name}) {
    return (
      <Link className="header__menu__item" 
            to={path}>{name}</Link>
    );
}
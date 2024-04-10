import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
      <div className="header">
        <nav>
          <ul className="header-menu-list">
            <li>
              <Link to="/" className="header-menu">Home</Link>
            </li>
            <li>
              <Link to="/about" className="header-menu">About</Link>  
            </li>
            <li>
              <Link to="/skills" className="header-menu">Skills</Link>
            </li>
            <li>
              <Link to="/work" className="header-menu">My work</Link>
            </li>
            <li>
              <Link to="/all" className="header-menu">Products</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>  
            </li>
            <li>
              <Link to="/work">My work</Link>  
            </li>
          </ul>
        </nav>
      </div>
    );
}
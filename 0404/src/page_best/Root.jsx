import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components_best/Navbar.jsx';

export default function Root() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
}
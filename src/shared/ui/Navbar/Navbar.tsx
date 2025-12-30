import React from 'react';
import { NavLink } from '../NavLink';

export const Navbar: React.FC = () => (
  <nav className="flex space-x-4">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>
);
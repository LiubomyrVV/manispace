import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className: 'text-blue-500 hover:text-blue-700'
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children, className }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);
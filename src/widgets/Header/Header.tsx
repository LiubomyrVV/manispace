import React from 'react';
import { Button, Logo, Navbar } from '../../shared/ui';

export const Header: React.FC = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <Logo />
    <Navbar />
    <Button />
  </header>
);
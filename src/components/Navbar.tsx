// src/components/Navbar.tsx
import React from 'react';
import { FaWallet } from 'react-icons/fa';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div>My Web3 App</div>
      <div className="wallet-icon">
        <FaWallet />
      </div>
    </nav>
  );
};

export default Navbar;
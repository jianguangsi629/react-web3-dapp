// src/components/Navbar.tsx
import React from 'react';
import { FaWallet } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#1e2a38', color: '#fff' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My Web3 App</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#blog" style={{ marginRight: '20px', color: '#fff', textDecoration: 'none', cursor: 'pointer' }}>Blog</a>
        <a href="#developer" style={{ marginRight: '20px', color: '#fff', textDecoration: 'none', cursor: 'pointer' }}>Doc</a>
        <FaWallet style={{ fontSize: '1.5rem', color: '#fff', cursor: 'pointer' }} />
      </div>
    </nav>
  );
};

export default Navbar;
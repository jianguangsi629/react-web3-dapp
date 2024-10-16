// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#1e2a38', color: '#fff', textAlign: 'center', padding: '10px', position: 'fixed', bottom: 0, width: '100%' }}>
      <p>&copy; 2024 My Web3 App. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
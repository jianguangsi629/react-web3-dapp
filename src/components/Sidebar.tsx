// src/components/Sidebar.tsx
import React from 'react';

interface SidebarProps {
  onSwitchComponent: (component: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSwitchComponent }) => {
  return (
    <div className="sidebar" style={{ width: '220px', backgroundColor: '#2f3b4b', color: '#fff', height: '100vh', padding: '20px', position: 'fixed', top: '60px', left: '0' }}>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li style={{ marginBottom: '20px', cursor: 'pointer' }} onClick={() => onSwitchComponent('Publisher')}>
          Publisher
        </li>
        <li style={{ cursor: 'pointer' }} onClick={() => onSwitchComponent('Aggregator')}>
          Aggregator
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

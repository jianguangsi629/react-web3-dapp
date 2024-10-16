// src/components/Sidebar.tsx
import React from "react";
import "./Sidebar.css";

interface SidebarProps {
  onSwitchComponent: (component: string) => void;
}
const Sidebar: React.FC<SidebarProps> = ({onSwitchComponent}) => {
  return (
    <div className="sidebar" style={{ width: '200px', backgroundColor: '#333', color: '#fff', height: '100vh', padding: '20px' }}>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
      <li style={{ marginBottom: '20px', cursor: 'pointer' }} onClick={() => onSwitchComponent('Publisher')}>
      Publisher
      </li>
      <li style={{ cursor: 'pointer' }} onClick={() => onSwitchComponent('Aggregator')}>
      Aggrator
      </li>
      </ul>
    </div>
  );
};

export default Sidebar;

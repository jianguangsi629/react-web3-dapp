// src/components/Sidebar.tsx
import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Publisher</li>
        <li>Aggrator</li>
      </ul>
    </div>
  );
};

export default Sidebar;

// src/App.tsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Publisher from './components/Publisher';
import Aggregator from './components/Aggregator';
import './styles.css';

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('Publisher');

  const renderComponent = () => {
    if (activeComponent === 'Publisher') {
      return <Publisher />;
    } else if (activeComponent === 'Aggregator') {
      return <Aggregator />;
    }
    return null;
  };

  return (
    <div className="app">
      <Navbar />
      <div className="main-content" style={{ display: 'flex' }}>
        <Sidebar onSwitchComponent={setActiveComponent} />
        <div className="content-area" style={{ flex: 1, padding: '20px' }}>
          {renderComponent()}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default App;
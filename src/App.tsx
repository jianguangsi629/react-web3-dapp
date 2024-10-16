import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from './components/Sidebar';

import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          {/* 这里可以放内容区域 */}
          <h1>Main Content Area</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

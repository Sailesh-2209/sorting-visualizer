import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Visualizer from './Visualizer';
import './App.css';

function App() {
  return (
    <div className="global-container">
      <div className="nav-container">
        <Navbar />
      </div>
      <div className="view-container">
        <Sidebar />
        <Visualizer />
      </div>
    </div>
  );
}

export default App;

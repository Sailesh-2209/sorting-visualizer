import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Visualizer from './Visualizer';
import './App.css';

function App() {

  const [ size, setSize ] = useState(500);
  console.log(size);

  const [ width, height ] = [ window.innerWidth, window.innerHeight ];
  let smallScreen = false;
  if (height < 650 || width < 1190 ) {
    smallScreen = true;
  }

  if (smallScreen) {
    return <h1 style={{color:'white', marginTop: '50px', textAlign: 'center'}}>This app only works on a bigger screen.</h1>
  }
  else {
    return (
      <div className="global-container">
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="view-container">
          <Sidebar size={size} setSize={setSize} />
          <Visualizer />
        </div>
      </div>
    );
  }
}

export default App;

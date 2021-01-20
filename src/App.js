import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Visualizer from './Visualizer';
import './App.css';

function App() {

  const [ size, setSize ] = useState(700);
  const [ array, setArray ] = useState([]);
  const [ sortingAlgorithm, setSortingAlgorithm ] = useState('bubble');

  const makeArray = () => {
    const tempArray = [];
    for (let i = 0; i < size; i++) {
      tempArray.push(Math.floor(Math.random() * 1050) + 50);
    }
    setArray(tempArray);
  }

  useEffect(() => {
    makeArray();
  }, [size]);

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
          <Sidebar 
            size={size} 
            setSize={setSize} 
            sortingAlgorithm={sortingAlgorithm} 
            setSortingAlgorithm={setSortingAlgorithm} 
          />
          <Visualizer array={array} />
        </div>
      </div>
    );
  }
}

export default App;

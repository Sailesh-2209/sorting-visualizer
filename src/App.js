import React, { useState, useEffect, useRef } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Visualizer from './Visualizer';

import './App.css';

import bubbleSort from './algorithms/bubble';
import mergeSort from './algorithms/merge';
import selectionSort from './algorithms/selection';
import insertionSort from './algorithms/insertion';
import quickSort from './algorithms/quick';

function App() {

  const [ width, height ] = [ window.innerWidth, window.innerHeight ];

  const [ size, setSize ] = useState(235);
  const [ array, setArray ] = useState([]);
  const [ sortingAlgorithm, setSortingAlgorithm ] = useState('bubble');
  const [ sort, setSort ] = useState(false);
  const element = useRef();

  const makeArray = () => {
    const tempArray = [];
    for (let i = 0; i < size; i++) {
      tempArray.push(Math.floor(Math.random() * 1050) + 50);
    }
    setArray(tempArray);
  }

  const startSort = () => {
    let arrayCopy = [...array];
    if (sort && sortingAlgorithm === 'bubble')  {
      bubbleSort(arrayCopy, element);
    }
    else if (sort && sortingAlgorithm === 'merge') {
      mergeSort(arrayCopy, element);
    }
    else if (sort && sortingAlgorithm === 'selection') {
      selectionSort(arrayCopy, element);
    }
    else if (sort && sortingAlgorithm === 'insertion') {
      insertionSort(arrayCopy, element);
    }
    else if (sort && sortingAlgorithm === 'quick') {
      quickSort(arrayCopy, element);
    }
  }

  useEffect(() => {
    makeArray();
  }, [size]);

  useEffect(() => {
    startSort();
    return () => {
      setSort(false);
    }
  }, [sort]);

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
            setSort={setSort}
          />
          <Visualizer array={array} element={element} />
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import lifeData from './TreeOfLife';
import ListItemWithToggle from './ListItemWithToggle';


export default function App() {
  return (
    <div className="App" >
      <ListItemWithToggle lifeData={lifeData}></ListItemWithToggle>
    </div>
  );
}

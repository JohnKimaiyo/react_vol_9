import React from 'react';
import './App.css';
import Greet from './Component/Greet';
import Hello from './Component/Hello';
import Welcome from './Component/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Greet />
      <Hello/>
    </div>
  );
}

export default App;

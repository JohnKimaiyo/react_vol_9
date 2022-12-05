import React from 'react';
import './App.css';
import Greet from './Component/Greet';
import Welcome from './Component/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Greet />
    </div>
  );
}

export default App;

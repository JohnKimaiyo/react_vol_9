import React from "react";
import "./App.css";
import Greet from "./Component/Greet";
import Hello from "./Component/Hello";
import Welcome from "./Component/Welcome";
import Title from "./Component/Title";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Greet />
      <Hello />
      <Title name="FrontEnd developer" />
      <Title name="Mobile developer" />
      <Title name="Solidity developer" />
    </div>
  );
}

export default App;

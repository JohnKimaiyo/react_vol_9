import React from "react";
import "./App.css";
import Greet from "./Component/Greet";
import Hello from "./Component/Hello";
import Welcome from "./Component/Welcome";
import Title from "./Component/Title";
import MyName from "./Component/MyName";
import Form from "./Component/Form";
import Mycount from "./Component/Mycount";
import Users from "./Component/Users";
import Event from "./Component/Event";
import Range from "./Component/Range";
function App() {
  return (
    <div className="App">
      <Welcome />
      <Greet />
      <Hello />
      <Title name="FrontEnd developer" />
      <Title name="Mobile developer" />
      <Title name="Solidity developer" />
      <MyName/>
      <Form/>
      <Mycount/>
      <Users/>
      <Event/>
      <Range/>
    </div>
  );
}

export default App;

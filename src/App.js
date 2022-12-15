import React from "react";
import "./App.css";
import BookList from "./Component/BookList";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <BookList/>
      <Navbar/>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import BookList from "./Component/BookList";
import Navbar from "./Component/Navbar";
import ThemeToggle from "./Component/ThemeToggle";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookList />
        <Navbar />
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

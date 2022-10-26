import React from "react";
import "./App.css";
import Info from "./components/Info";
import About from "./components/About";


function App() {
  return (
    <div>
      <Info />
      <div className="section">
        <About />
      </div>
    </div>
  );
}

export default App;

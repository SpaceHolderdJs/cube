import React, { useEffect } from "react";
import { InitScene } from "./scene";
import "./App.css";

function App() {
  useEffect(() => {
    InitScene();
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;

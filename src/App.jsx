import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import About from "./components/About";

function App() {
  return (
    <div className="main relative">
      <Header />
      <Container1/>
      <Container2/>
      <About/>
    </div>
  );
}

export default App;

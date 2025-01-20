import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import Explore from "./components/Explore";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="main relative">
      <Header />
      <Container1/>
      <Container2/>
      <About/>
      <Tokenomics/>
      <Roadmap/>
      <Faq/>
      <Explore/>
      <Footer/>
    </div>
  );
}

export default App;

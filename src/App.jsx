import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      // className="bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800"
      className="font-bai"
    >
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <div
      // className="bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800"
      // className="font-bai"
    >
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
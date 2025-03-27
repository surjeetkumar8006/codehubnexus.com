import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
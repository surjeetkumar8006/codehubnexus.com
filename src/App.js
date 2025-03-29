import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
<<<<<<< HEAD
=======
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> recovered-files
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
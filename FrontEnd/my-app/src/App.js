import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./features/Navbar";

function App() {
  return (
    <div>
      <h1>APP HOME</h1>
      <NavBar></NavBar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./layout/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default App;

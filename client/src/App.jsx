import { Outlet } from "react-router-dom";
import NavBar from "./layout/NavBar";

export default function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="pt-4">
        <Outlet />
      </main>
    </div>
  );
}

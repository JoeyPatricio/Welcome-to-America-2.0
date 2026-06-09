import { Outlet } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

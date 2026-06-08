import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Topics from "./pages/Topics.jsx";
import Forms from "./pages/Forms.jsx";
import FindHelp from "./pages/FindHelp.jsx";
import Registration from "./pages/Registration.jsx";
import Undocumented from "./pages/Undocumented.jsx";
import K12 from "./pages/K-12.jsx";
import About from "./pages/About.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import MentalHealth from "./pages/MentalHealth.jsx";
import Healthcare from "./pages/Healthcare.jsx";
import ReproductiveHealth from "./pages/ReproductiveHealth.jsx";
import GreenCards from "./pages/GreenCards.jsx";
import LegalSupport from "./pages/LegalSupport.jsx";
import DriversLicenses from "./pages/DriversLicenses.jsx";
import GovernmentAssistance from "./pages/GovernmentAssistance.jsx";
import Employment from "./pages/Employment.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="topics" element={<Topics />} />
          <Route path="forms" element={<Forms />} />
          <Route path="find_help" element={<FindHelp />} />
          <Route path="registration" element={<Registration />} />
          <Route path="green-cards" element={<GreenCards />} />
          <Route path="legal-support" element={<LegalSupport />} />
          <Route path="drivers-licenses" element={<DriversLicenses />} />
          <Route path="government-assistance" element={<GovernmentAssistance />} />
          <Route path="employment" element={<Employment />} />
          <Route path="undocumented" element={<Undocumented />} />
          <Route path="k-12" element={<K12 />} />
          <Route path="about" element={<About />} />
          <Route path="mental-health" element={<MentalHealth />} />
          <Route path="healthcare" element={<Healthcare />} />
          <Route path="reproductive-health" element={<ReproductiveHealth />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

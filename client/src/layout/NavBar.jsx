import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/topics",    label: "Topics"    },
  { to: "/forms",     label: "Forms"     },
  { to: "/find_help", label: "Find Help" },
  { to: "/about",     label: "About"     },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function loadGoogleTranslateScript(callback) {
      if (window.google && window.google.translate) { callback(); return; }
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
      window.googleTranslateElementInit = callback;
    }
    loadGoogleTranslateScript(() => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", includedLanguages: "en,es,zh-CN,ar,fr,ru",
            layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL },
          "google_translate_element"
        );
      }
    });
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold tracking-wide transition-colors px-1 py-0.5 ${
      isActive
        ? "text-emerald-700 border-b-2 border-emerald-600"
        : "text-slate-600 hover:text-emerald-700"
    }`;

  return (
    <div>
      {/* Emerald brand stripe */}
      <div className="h-1 w-full bg-emerald-600" />

      <nav className="bg-white shadow-sm px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-8">

          {/* Logo */}
          <NavLink
            to="/"
            end
            className="flex items-center gap-2.5 shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <img src="/app-icon.svg" alt="" className="h-7 w-7" aria-hidden="true" />
            <span className="font-[Merriweather] font-bold text-emerald-800 text-lg leading-tight">
              Welcome to America
            </span>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 ml-4">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Google Translate */}
          <div id="google_translate_element" className="hidden md:block ml-auto" />

          {/* Hamburger */}
          <button
            className="md:hidden ml-auto p-2 rounded-lg text-slate-600 hover:bg-gray-100 transition"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((p) => !p)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden max-w-6xl mx-auto mt-3 pt-3 border-t border-gray-100 flex flex-col gap-3 pb-2">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

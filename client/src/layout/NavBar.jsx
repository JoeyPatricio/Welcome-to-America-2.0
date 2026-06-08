import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  useEffect(() => {
    // Helper to load the script only once
    function loadGoogleTranslateScript(callback) {
      if (window.google && window.google.translate) {
        callback();
        return;
      }
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
      window.googleTranslateElementInit = callback;
    }

    loadGoogleTranslateScript(() => {
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,zh-CN,ar,fr,ru",
            layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
          },
          "google_translate_element"
        );
      }
    });
  }, []);

  return (
    <div>
      <nav className="p-4 bg-white flex gap-8 shadow items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-600 text-3xl font-[Merriweather] font-bold hover:underline"
        >
          <img
            src="/app-icon.svg"
            alt="App Icon"
            className="h-8 w-8 -translate-y-1"
          />
          Welcome to America
        </Link>
        <Link
          to="/topics"
          className="text-blue-600 hover:underline text-xl font-[Merriweather] font-bold"
        >
          Topics
        </Link>
        <Link
          to="/forms"
          className="text-blue-600 hover:underline text-xl font-[Merriweather] font-bold"
        >
          Forms
        </Link>
        <Link
          to="/find_help"
          className="text-blue-600 hover:underline text-xl font-[Merriweather] font-bold"
        >
          Find Help
        </Link>
        <Link
          to="/about"
          className="text-blue-600 hover:underline text-xl font-[Merriweather] font-bold"
        >
          About
        </Link>
        {/* Google Translate dropdown */}
        <div id="google_translate_element" className="ml-auto" />
      </nav>
    </div>
  );
}

export default NavBar;

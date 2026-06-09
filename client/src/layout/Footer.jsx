import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <p className="font-[Merriweather] font-bold text-emerald-700 text-base mb-2">
            Welcome to America
          </p>
          <p className="leading-relaxed">
            A free resource hub helping immigrants navigate life in the United States.
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-800 mb-3">Topics</p>
          <ul className="space-y-1.5">
            <li><Link to="/registration" className="hover:text-emerald-700 transition">Registration</Link></li>
            <li><Link to="/green-cards" className="hover:text-emerald-700 transition">Green Cards</Link></li>
            <li><Link to="/legal-support" className="hover:text-emerald-700 transition">Legal Support</Link></li>
            <li><Link to="/healthcare" className="hover:text-emerald-700 transition">Healthcare</Link></li>
            <li><Link to="/employment" className="hover:text-emerald-700 transition">Employment</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-slate-800 mb-3">Resources</p>
          <ul className="space-y-1.5">
            <li><Link to="/find_help" className="hover:text-emerald-700 transition">Find Help Near You</Link></li>
            <li><Link to="/forms" className="hover:text-emerald-700 transition">USCIS Forms</Link></li>
            <li><Link to="/mental-health" className="hover:text-emerald-700 transition">Mental Health</Link></li>
            <li><Link to="/about" className="hover:text-emerald-700 transition">About</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-400">
        <p>
          © {new Date().getFullYear()} Welcome to America · Built by students at Western Washington University ·{" "}
          <a href="mailto:info@welcometoamerica.com" className="hover:text-emerald-600 transition">
            info@welcometoamerica.com
          </a>
        </p>
        <p className="mt-1">
          For informational purposes only. Not legal advice.{" "}
          <a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition">
            Crisis? Call or text 988.
          </a>
        </p>
      </div>
    </footer>
  );
}

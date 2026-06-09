import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <p className="text-6xl font-[Merriweather] font-bold text-emerald-600 mb-4">404</p>
      <h1 className="text-2xl font-bold text-slate-800 mb-3">Page Not Found</h1>
      <p className="text-gray-500 mb-8">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

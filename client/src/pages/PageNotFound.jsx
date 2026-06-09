import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">404 — Page Not Found</h1>
      <p className="text-gray-600 mb-6">Sorry, we couldn&apos;t find the page you were looking for.</p>
      <Link to="/" className="text-blue-600 hover:underline font-semibold">← Back to Home</Link>
    </div>
  );
}
